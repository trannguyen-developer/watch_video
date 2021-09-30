const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const All_video = new Schema ({
    title: { type: String },
    description: { type: String },
    idVideo: { type: String }},
    { timestamps: true }
)

module.exports = mongoose.model('allVideo', All_video)
