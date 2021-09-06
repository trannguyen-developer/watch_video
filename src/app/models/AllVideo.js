const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const All_video = new Schema ({
    title: { type: String },
    description: { type: String },
    idVideo: { type: String },
})

module.exports = mongoose.model('allvideo', All_video)
