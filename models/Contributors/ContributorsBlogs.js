const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    validated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Contributor = mongoose.model("ContributorsBlogs", contributorSchema);
module.exports = Contributor;
