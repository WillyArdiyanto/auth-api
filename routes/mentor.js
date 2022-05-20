const router = require("express").Router();
const Mentor = require("../model/mentor");

router.post("/", async (req, res) => {
  const mentor = new Mentor({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    expertise: req.body.expertise,
  });
  try {
    const savedMentor = await mentor.save();
    res.send(savedMentor);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
