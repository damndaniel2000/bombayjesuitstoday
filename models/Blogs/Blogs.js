const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    blogContent: {
      type: String,
      required: true,
    },
    imgLink: {
      type: String,
      default: "",
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

module.exports = Blogs = mongoose.model("Blogs", blogSchema);
