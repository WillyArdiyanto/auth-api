const mentor_route = require("express").Router();

//import controller
const mentorController = require('../controller/mentor');

mentor_route.route("/")
  .post(mentorController.addMentor)
  .get(mentorController.getAllMentor)

//get specific mentor
mentor_route.route("/:mentorId")
  .get(mentorController.getMentorById)
  .delete(mentorController.deleteMentorById)
  .patch(mentorController.updateMentorById)

module.exports = mentor_route;
