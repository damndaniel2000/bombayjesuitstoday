const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const counterSchema = new Schema(
  {
    count: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("HitCounter", counterSchema);
