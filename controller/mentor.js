const Mentor = require("../model/mentor");

module.exports = {
    addMentor: async (req, res) => {
        const mentor = new Mentor({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          expertise: req.body.expertise,
          price: req.body.price,
        });
        try {
          const savedMentor = await mentor.save();
          res.status(201).send(savedMentor);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    getAllMentor: async (req, res) => {
        try {
          const mentors = await Mentor.find();
          res.status(200).json(mentors);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    getMentorById: async (req, res) => {
        try {
          const mentor = await Mentor.findById(req.params.mentorId);
          res.status(200).json(mentor);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    deleteMentorById: async (req, res) => {
        try {
          const removeMentor = await Mentor.remove({_id: req.params.mentorId});
          res.status(200).json(removeMentor);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    updateMentorById: async (req, res) => {
        try {
          const updateMentor = await Mentor.updateOne(
            {_id: req.params.mentorId},
            {$set: {
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
              expertise: req.body.expertise,
              price: req.body.price,
            }});
            res.status(200).json(updateMentor);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    }
}