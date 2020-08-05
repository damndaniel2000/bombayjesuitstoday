const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middleware/auth");

const Contributor = require("../models/ContributorsLaity");

const contributorRouter = express.Router();

contributorRouter
  .route("/")
  .get((req, res, next) => {
    Contributor.find(req.query)
      .sort({ _id: -1 })
      .then(
        (contributors) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(contributors);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Contributor.create(req.body)
      .then(
        (contributors) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(contributors);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

contributorRouter
  .route("/:contributorID")
  .get((req, res, next) => {
    Contributor.findById(req.params.contributorID)
      .then((contri) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(contri);
      })
      .catch((err) => next(err));
  })
  .delete(auth, (req, res, next) => {
    Contributor.findById({ _id: req.params.contributorID })
      .then((video) => video.remove())
      .then(
        (contributors) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(contributors);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .put((req, res, next) => {
    Contributor.findByIdAndUpdate(
      req.params.contributorID,
      { $set: req.body },
      { new: true }
    )
      .then((video) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(video);
      })
      .catch((err) => next(err));
  });

module.exports = contributorRouter;
