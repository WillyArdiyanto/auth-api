const router = require("express").Router();

const userController = require('../controller/user');

router.route("/register")
  .post(userController.index)

module.exports = router;
