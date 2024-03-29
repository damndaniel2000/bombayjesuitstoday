const express = require("express");
const mongoose = require("mongoose");
const auth = require("../../middleware/auth");

const Video = require("../../models/Videos/VideosYouth");

const videoRouter = express.Router();

videoRouter
  .route("/")
  .get((req, res, next) => {
    Video.find(req.query)
      .sort({ date: -1 })
      .then(
        (videos) => {
          res.setHeader("Content-Type", "application/json");
          res.json(videos);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(auth, (req, res, next) => {
    Video.create(req.body)
      .then(
        () => {
          res.setHeader("Content-Type", "application/json");
          res.json({ message: "Video Successfully Posted" });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

videoRouter
  .route("/:videoID")
  .get((req, res, next) => {
    Video.findById(req.params.videoID)
      .then(
        (video) => {
          res.setHeader("Content-Type", "application/json");
          res.json(video);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .put(auth, (req, res, next) => {
    Video.findByIdAndUpdate(
      req.params.videoID,
      { $set: req.body },
      { new: true }
    )
      .then(
        () => {
          res.setHeader("Content-Type", "application/json");
          res.json({ message: "Video Successfully Updated" });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete(auth, (req, res, next) => {
    Video.findById(req.params.videoID)
      .then((video) => video.remove())
      .then(
        () => {
          res.setHeader("Content-Type", "application/json");
          res.json({ message: "Video Successfully Deleted" });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = videoRouter;
