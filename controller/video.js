const { request } = require("express");
const Video = require("../model/video");
module.exports = {
    addVideo: async (req, res) => {
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
          console.log(err);
        }
    },
    getAllVideo: async (req, res) => {
        try {
          const videos = await Video.find();
          res.json(videos);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    getVideoById: async (req, res) => {
        try {
          const video = await Video.findById(req.params.videoId);
          res.json(video);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    deleteVideoById: async (req, res) => {
        try {
          const removeVideo = await Video.remove({_id: req.params.videoId});
          res.json(removeVideo);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    updateVideoById: async (req, res) => {
        try {
          const updatedVideo = await Video.updateOne(
            {_id: req.params.videoId}, 
            {$set: {
              mentor: req.body.mentor,
              title: req.body.title,
              link: req.body.link
            }});
          res.json(updatedVideo);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
};