const mentor_route = require("express").Router();
const Mentor = require("../model/mentor");

mentor_route.post("/", async (req, res) => {
  const mentor = new Mentor({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    expertise: req.body.expertise,
  });
  try {
    const savedMentor = await mentor.save();
    res.status(200).send(savedMentor);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

module.exports = mentor_route;
