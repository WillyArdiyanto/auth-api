const booking_route = require("express").Router();
const Booking = require("../model/booking");
const Session = require("../model/session");
const User = require("../model/user");

//get all booking
booking_route.get("/", async (req, res) => {
    const getAllBooking = await Booking.find({});
    if (!getAllBooking) {
      return res.status(400).send("Tidak ada booking");
    } else {
      res.json(getAllBooking);
    }
  });

  //add booking
  booking_route.post("/:sessionId/:userId", async (req, res) => {
    const { sessionId } = req.params;
    const { userId } = req.params;
    const session = await Session.findById(sessionId);
    const user = await User.findById(userId);
    if (session) {
      const booking = new Booking({
        session: session,
        is_booked: req.body.is_booked,
      });
  
      // assign user as a booker
      booking.mentee = user;
      await booking.save();
  
      // add booking to user's array booking
      user.booking.push(booking);
      await user.save();
      res.status(201).json(booking);
    }
  });
  
  // get booking by user_id
  booking_route.get("/:userId", async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.json(user.booking);
  });
  


module.exports = booking_route;