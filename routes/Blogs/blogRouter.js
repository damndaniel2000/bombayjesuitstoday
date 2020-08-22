const express = require("express");
const mongoose = require("mongoose");
const auth = require("../../middleware/auth");

const Blog = require("../../models/Blogs/Blogs");
const blogRouter = express.Router();

blogRouter
  .route("/")
  .get((req, res, next) => {
    Blog.find(req.query)
      .sort({ date: -1 })
      .then((blogs) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(blogs);
      })
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Blog.create(req.body)
      .then((blog) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(blog);
      })
      .catch((err) => next(err));
  });

blogRouter
  .route("/:blogID")
  .get((req, res, next) => {
    Blog.findById(req.params.blogID)
      .then((blog) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(blog);
      })
      .catch((err) => next(err));
  })
  .put(auth, (req, res, next) => {
    Blog.findByIdAndUpdate(
      req.params.blogID,
      { $set: req.body },
      { new: true }
    ).then((blog) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(blog);
    });
  })
  .delete(auth, (req, res, next) => {
    Blog.findById(req.params.blogID)
      .then((blog) => blog.remove())
      .then((blog) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(blog);
      })
      .catch((err) => next(err));
  });

module.exports = blogRouter;
