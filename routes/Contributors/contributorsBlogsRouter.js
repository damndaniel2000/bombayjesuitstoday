const express = require("express");
const mongoose = require("mongoose");
const auth = require("../../middleware/auth");

const Contributor = require("../../models/Contributors/ContributorsBlogs");
const Blogs = require("../../models/Blogs/Blogs");

const contributorRouter = express.Router();

contributorRouter
  .route("/")
  .get((req, res, next) => {
    Contributor.find(req.query)
      .sort({ _id: -1 })
      .then(
        (contributors) => {
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
          res.setHeader("Content-Type", "application/json");
          res.json({ message: "Contributor Successfully Posted" });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

contributorRouter
  .route("/:contributorID")
  .get((req, res, next) => {
    Contributor.findById(req.params.contributorID)
      .then(
        (contri) => {
          res.setHeader("Content-Type", "application/json");
          res.json(contri);
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
      .then(
        (contri) => {
          res.setHeader("Content-Type", "application/json");
          res.json({ message: "Contributor Successfully Updated" });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete(auth, (req, res, next) => {
    Contributor.findById(req.params.contributorID)
      .then((contri) => contri.remove())
      .then(
        (contributors) => {
          res.setHeader("Content-Type", "application/json");
          res.json({ message: "Contributor Successfully Deleted" });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

contributorRouter.route("/:contributorID/blogs").get((req, res, next) => {
  Contributor.findById(req.params.contributorID)
    .lean()
    .then((contri) => {
      Blogs.find({ author: contri.name })
        .lean()
        .then((blogs) => {
          res.setHeader("Content-Type", "application/json");
          res.json(blogs);
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
});

module.exports = contributorRouter;
