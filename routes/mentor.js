const mentor_route = require("express").Router();

//import controller
const mentorController = require('../controller/mentor');

mentor_route.route("/")
  .post(mentorController.addMentor)
  .get(mentorController.getAllMentor)

mentor_route.route("/:mentorId")
  .get(mentorController.getMentorById)
  .delete(mentorController.deleteMentorById)
  .patch(mentorController.updateMentorById)

mentor_route.route("/:mentorId/video")
  .get(mentorController.getMentorVideo)
  .post(mentorController.addMentorVideo)

mentor_route.route("/:mentorId/mentee")
  .get(mentorController.getMentorMentee)
  .post(mentorController.addMentorMentee)

module.exports = mentor_route;
