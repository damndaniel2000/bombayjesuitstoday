const express = require("express");
const mongoose = require("mongoose");
const auth = require("../../middleware/auth");

const Contributor = require("../../models/Contributors/ContributorsJesuits");

const contributorRouter = express.Router();

contributorRouter
  .route("/")
  .get((req, res, next) => {
    Contributor.find(req.query)
      .sort({ _id: -1 })
      .then(
        (contri) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(contri);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Contributor.create(req.body)
      .then(
        () => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ message: "Contributor Successfully Updated" });
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
  .put(auth, (req, res, next) => {
    Contributor.findByIdAndUpdate(
      req.params.contributorID,
      { $set: req.body },
      { new: true }
    )
      .then(() => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({ message: "Contributor Successfully Updated" });
      })
      .catch((err) => next(err));
  })
  .delete(auth, (req, res, next) => {
    Contributor.findById(req.params.contributorID)
      .then((contri) => contri.remove())
      .then(
        () => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ message: "Contributor Successfully Deleted" });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

contributorRouter
  .route("/:contributorID/videos")
  .get((req, res, next) => {
    Contributor.findById(req.params.contributorID)
      .populate("videos.videoID")
      .then(
        (contri) => {
          if (contri !== null) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(contri.videos);
          } else {
            err = new Error("Videos not found");
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Contributor.findById(req.params.contributorID).then((contri) => {
      if (contri !== null) {
        contri.videos.push(req.body);
        contri
          .save()
          .then(
            () => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json({ message: "Video Successfully Added" });
            },
            (err) => next(err)
          )
          .catch((err) => next(err));
      } else {
        err = new Error("Contributor with this ID could not be found");
        err.status = 404;
        return next(err);
      }
    });
  });

contributorRouter
  .route("/:contributorID/videos/:videoID")
  .delete((req, res, next) => {
    Contributor.findById(req.params.contributorID)
      .then(
        (contri) => {
          if (
            contri !== null &&
            contri.videos.id(req.params.videoID) !== null
          ) {
            contri.videos.id(req.params.videoID).remove();
            contri
              .save()
              .then((video) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json({ message: "Video Deleted Successfully" });
              })
              .catch((err) => next(err));
          } else if (contri === null) {
            err = new Error("Contributor with this ID could not be found");
            err.status = 404;
            return next(err);
          } else {
            err = new Error("Video with this ID could not be found");
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });
module.exports = contributorRouter;
