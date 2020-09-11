const express = require("express");
const mongoose = require("mongoose");
const auth = require("../../middleware/auth");

const Blog = require("../../models/Blogs/Blogs");
const blogRouter = express.Router();

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

blogRouter
  .route("/")
  .get((req, res, next) => {
    if (req.query.type === "title" && req.query.search) {
      const regex = new RegExp(escapeRegex(req.query.search), "gi");
      Blog.find({ title: regex })
        .sort({ date: -1 })
        .then((blog) => {
          res.setHeader("Content-Type", "application/json");
          res.json(blog);
        })
        .catch((err) => next(err));
    } else if (req.query.type === "author" && req.query.search) {
      const regex = new RegExp(escapeRegex(req.query.search), "gi");
      Blog.find({ author: regex })
        .sort({ date: -1 })
        .then((blog) => {
          res.setHeader("Content-Type", "application/json");
          res.json(blog);
        })
        .catch((err) => next(err));
    } else if (req.query.type === "date" && req.query.search) {
      const searchDate = new Date(req.query.search);
      Blog.find({ date: { $gte: searchDate } })
        .then((blog) => {
          res.setHeader("Content-Type", "application/json");
          res.json(blog);
        })
        .catch((err) => console.log(err));
    } else {
      Blog.find()
        .sort({ date: -1 })
        .then(
          (blogs) => {
            res.setHeader("Content-Type", "application/json");
            res.json(blogs);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    }
  })
  .post((req, res, next) => {
    Blog.create(req.body)
      .then((blog) => {
        res.setHeader("Content-Type", "application/json");
        res.json({ message: "Blog Successfully Posted" });
      })
      .catch((err) => next(err));
  });

blogRouter
  .route("/:blogID")
  .get((req, res, next) => {
    Blog.findById(req.params.blogID)
      .then(
        (blog) => {
          res.setHeader("Content-Type", "application/json");
          res.json(blog);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .put(auth, (req, res, next) => {
    Blog.findByIdAndUpdate(req.params.blogID, { $set: req.body }, { new: true })
      .then(
        (blog) => {
          res.setHeader("Content-Type", "application/json");
          res.json({ message: "Blog Successfully Updated" });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete(auth, (req, res, next) => {
    Blog.findById(req.params.blogID)
      .then((blog) => blog.remove())
      .then(
        (blog) => {
          res.setHeader("Content-Type", "application/json");
          res.json({ message: "Blog Successfully Deleted" });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = blogRouter;
