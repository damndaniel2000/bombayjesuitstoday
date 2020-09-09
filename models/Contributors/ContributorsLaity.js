const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  videoID: {
    type: Schema.Types.ObjectID,
    refPath: "videos.onModel",
  },
  onModel: {
    type: String,
    required: true,
    enum: [
      "VideosLaity",
      "VideosSpiritual",
      "VideosFollow",
      "VideosMission",
      "VideosYouth",
      "VideosGospel",
    ],
  },
});

const contributorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    basedLocation: {
      type: String,
      required: true,
    },
    videosURL: {
      type: String,
      default: "",
    },
    videos: [videoSchema],
    validated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Contributor = mongoose.model("ContributorsLaity", contributorSchema);
module.exports = Contributor;
