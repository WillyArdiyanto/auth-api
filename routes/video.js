const router = require("express").Router();
const Video = require("../model/video");

router.post("/", async (req, res) => {
  const video = new Video({
    mentor: req.body.mentor,
    title: req.body.title,
    link: req.body.link,
  });
  try {
    const savedVideo = await video.save();
    res.status(200).send(savedVideo);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = video_route;
