const express = require("express");
const mongoose = require("mongoose");
const auth = require("../../middleware/auth");

const Video = require("../../models/Videos/VideosFollow");

const videoRouter = express.Router();

videoRouter
  .route("/")
  .get((req, res, next) => {
    Video.find(req.query)
      .sort({ _id: -1 })
      .then(
        (videos) => {
          res.statusCode = 200;
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
        (video) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(video);
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
          res.statusCode = 200;
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
        (video) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(video);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete(auth, (req, res, next) => {
    Video.findById(req.params.videoID)
      .then((video) => video.remove())
      .then(
        (videos) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(videos);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = videoRouter;
