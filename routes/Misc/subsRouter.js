const express = require("express");
const mongoose = require("mongoose");
const webPush = require("web-push");

const Subs = require("../../models/Misc/Subscription");
const subRouter = express.Router();

subRouter
  .route("/")
  .get((req, res, next) => {
    Subs.find({})
      .then((subs) => {
        res.json(subs);
      })
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Subs.create(req.body)
      .then(() => {
        res.json({ msg: "Sub Added" });
      })
      .catch((err) => next(err));
  });
const publicKey = process.env.PUBLIC_VAPID;
const privateKey = process.env.PRIVATE_VAPID;

subRouter.post("/send", (req, res, next) => {
  const payload = {
    title: req.body.title,
    message: req.body.message,
    image: req.body.image,
    badge: "https://bombayjesuitstoday.com/images/dove.png",
    icon: "https://bombayjesuitstoday.com/images/dove.png",
    data: { url: req.body.url },
  };
  Subs.find({})
    .then((subs) => {
      const parallelSubscriptionCalls = subs.map((subscription) => {
        return new Promise((resolve, reject) => {
          const pushSubscription = {
            endpoint: subscription.endpoint,
            keys: {
              p256dh: subscription.keys.p256dh,
              auth: subscription.keys.auth,
            },
          };

          const pushPayload = JSON.stringify(payload);
          const pushOptions = {
            vapidDetails: {
              subject: "https://bombayjesuitstoday.com/",
              privateKey: privateKey,
              publicKey: publicKey,
            },
          };
          webPush
            .sendNotification(pushSubscription, pushPayload, pushOptions)
            .then((value) => {
              resolve({
                status: true,
                endpoint: subscription.endpoint,
                data: value,
              });
            })
            .catch((err) => {
              reject({
                status: false,
                endpoint: subscription.endpoint,
                data: err,
              });
            });
        });
      });
      Promise.allSettled(parallelSubscriptionCalls).catch((err) => next(err));
      res.json({ data: "Pushed" });
    })

    .catch((err) => next(err));
});

module.exports = subRouter;
