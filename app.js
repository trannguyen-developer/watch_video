const express = require("express");
let db = require("./src/config/db");
const AllVideo = require("./src/app/models/AllVideo.js");
const methodOverride = require("method-override");

const app = express();
const port = process.env.PORT || 5000;

// important :((
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(methodOverride("_method"));

// connect to db
db.connect();

app.get("/api/get-data", (req, res) => {
  AllVideo.find({}, function (err, videos) {
    if (!err) {
      res.json(videos);
      return;
    }
    res.status(400).json({ err: "ERROR!!!" });
  });
});

app.get("/api/video/:slug", (req, res) => {
  AllVideo.find({ _id: req.params.slug }, function (err, video) {
    if (!err) {
      res.json(video);
      return;
    }
    res.status(400).json({ err: "ERROR!!!" });
  });
});

// create
app.post("/api/admin/create", async (req, res) => {
  const { title, description, idVideo, category } = req.body;

  try {
    const newVideo = new AllVideo({
      title,
      description,
      idVideo,
      category,
    });
    await newVideo.save();

    res.redirect("/admin");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// delete
app.delete("/api/admin/delete/:deleteById", async (req, res) => {
  AllVideo.deleteOne({ _id: req.params.deleteById }, function (err) {
    if (!err) {
      res.redirect("/admin");
    } else {
      res.json({
        success: false,
        message: "Error",
      });
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
