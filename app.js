const express = require('express')
let db = require('./src/config/db')
const All_video = require('./src/app/models/AllVideo')

const app = express();
const port = process.env.PORT || 5000;

// connect to db
db.connect()

app.get('/api/hello', (req, res) => {
  All_video.find({}, function(err, videos) {
    if(!err) {
      videos = videos.map(video => video.toObject())
      res.json(videos)
      return;
    }
    res.status(400).json({err: 'ERROR!!!'})
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));
