const express = require("express");
const mongoose = require("mongoose");

const Contributor = require("../models/Contributors");

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
        (video) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(video);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

contributorRouter.route("/:contributorID").delete((req, res, next) => {
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
});

module.exports = contributorRouter;
