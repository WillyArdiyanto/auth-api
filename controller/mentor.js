const Mentor = require("../model/mentor");
const Video = require("../model/video");
const User = require("../model/user");

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
          
          // with validator
          // const { mentorId } = req.value.params;
          // const mentor = await Mentor.findById(mentorId);
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
          const updateMentor = await Mentor.findByIdAndUpdate(
            {_id: req.params.mentorId},
            req.body);
            res.status(200).json(updateMentor);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    getMentorVideo: async (req, res) => {
        try{
          const mentor = await Mentor.findById(
            {_id: req.params.mentorId},
            req.body).populate('video');
            res.status(200).json(mentor.video);
            console.log("Mentor\'s video", mentor);

        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    addMentorVideo: async (req, res) => {
      try{
        //add new video
        const addVideo = await Video(req.body);
        //get mentor
        const mentor = await Mentor.findById(
          {_id: req.params.mentorId});
        //assign mentor as a video's owner
        addVideo.owner = mentor;
        //save the video
        await addVideo.save();
        //add video to the mentor's 
        mentor.video.push(addVideo);
        //save the mentor
        await mentor.save();
        res.status(201).json(addVideo);
      } catch (err) {
        res.status(400).send(err);
        console.log(err);
      }
  },
  getMentorMentee: async (req, res) => {
    try{
      const mentor = await Mentor.findById(
        {_id: req.params.mentorId},
        req.body).populate('mentee');
        res.status(200).json(mentor.mentee);
        //console.log("Mentor\'s video", mentor);

    } catch (err) {
      res.status(400).send(err);
      console.log(err);
    }
},
addMentorMentee: async (req, res) => {
  try{
    //add new video
    const addMentee = await User(req.body);
    //get mentor
    const mentor = await Mentor.findById(
      {_id: req.params.mentorId});
    //assign mentor as a video's owner
    addMentee.mentor = mentor;
    //save the video
    await addMentee.save();
    //add video to the mentor's 
    mentor.mentee.push(addMentee);
    //save the mentor
    await mentor.save();
    res.status(201).json(addMentee);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
},
}