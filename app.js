const express = require('express')
let db = require('./src/config/db')
const All_video = require('./src/app/models/AllVideo.js')

const app = express();
const port = process.env.PORT || 5000;

// connect to db
db.connect()

app.get('/api/get-data', (req, res) => {
  All_video.find({}, function(err, videos) {
    if(!err) {
      res.json(videos)
      return;
    }
    res.status(400).json({err: 'ERROR!!!'})
  })
});

app.get('/api/admin/create', (req, res) => {
  console.log(req.query);
  console.log('fdfdf');
  res.json({test: 'ffff'})
})

app.listen(port, () => console.log(`Listening on port ${port}`));
