const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogsSchema = {
  blogID: {
    type: Schema.Types.ObjectID,
    ref: "Blogs",
  },
};

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
    blogs: [blogsSchema],
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
