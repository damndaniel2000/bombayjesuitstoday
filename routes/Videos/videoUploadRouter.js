const express = require("express");
const mongoose = require("mongoose");
const auth = require("../../middleware/auth");

const Video = require("../../models/Videos/VideosUpload");

const videoRouter = express.Router();

videoRouter
  .route("/")
  .get((req, res, next) => {
    Video.find(req.query)
      .sort({ _id: -1 })
      .then(
        (videos) => {
          res.setHeader("Content-Type", "application/json");
          res.json(videos);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Video.create(req.body)
      .then(
        (video) => {
          res.setHeader("Content-Type", "application/json");
          res.json(video);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

videoRouter.route("/:videoID").delete(auth, (req, res, next) => {
  Video.findById({ _id: req.params.videoID })
    .then((video) => video.remove())
    .then(
      (videos) => {
        res.setHeader("Content-Type", "application/json");
        res.json(videos);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

module.exports = videoRouter;
