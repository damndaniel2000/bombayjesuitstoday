const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  uploader: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  embedLink: {
    type: String,
    required: true,
  },
  videoURL: {
    type: String,
    required: true,
  },
});

const Video = mongoose.model("VideosGospel", videoSchema);
module.exports = Video;
