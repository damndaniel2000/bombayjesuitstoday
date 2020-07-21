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
  },
  {
    timestamps: true,
  }
);

const Contributor = mongoose.model("Contributors", contributorSchema);
module.exports = Contributor;
