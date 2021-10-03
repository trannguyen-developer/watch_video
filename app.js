const express = require("express");
let db = require("./src/config/db");
const Video = require("./src/app/models/AllVideo.js");

const app = express();
const port = process.env.PORT || 5000;

// important :((
app.use(express.json());

// connect to db
db.connect();

app.get("/api/get-data", (req, res) => {
  All_video.find({}, function (err, videos) {
    if (!err) {
      res.json(videos);
      return;
    }
    res.status(400).json({ err: "ERROR!!!" });
  });
});

app.get("/api/video/:slug", (req, res) => {
  All_video.find({ _id: req.params.slug }, function (err, video) {
    if (!err) {
      res.json(video);
      return;
    }
    res.status(400).json({ err: "ERROR!!!" });
  });
});

app.post("/api/admin/create", async (req, res) => {
  const { title, description, idVideo, category } = req.body;

  try {
    const newVideo = new Video({
      title,
      description,
      idVideo,
      category,
    });
    await newVideo.save();
    res.json({
      success: true,
      message: "Video successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
