const express = require("express");
const mongoose = require("mongoose");

const Counter = require("../../models/Misc/HitCounter");
const counterRouter = express.Router();

counterRouter
  .route("/:id")
  .put((req, res, next) => {
    Counter.findById(req.params.id)
      .then((counter) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        const currentCount = counter.count;
        const newCount = currentCount + 1;
        Counter.findByIdAndUpdate(
          req.params.id,
          { $set: { count: newCount } },
          { new: true }
        ).then((newCount) => {
          res.json(newCount);
        });
      })
      .catch((err) => next(err));
  })
  .get((req, res, next) => {
    Counter.findById(req.params.id).then((count) => {
      res.status = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(count);
    });
  });

module.exports = counterRouter;
