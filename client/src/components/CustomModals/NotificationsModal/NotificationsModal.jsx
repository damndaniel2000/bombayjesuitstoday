import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import "./NotificationsModal.css";
import * as subscribe from "../../../serviceWorkers/subscription";

const Notification = () => {
  const [notificationModal, showNotificationModal] = useState(false);
  const [cookie, setCookie] = useCookies(["visitCount", "showNotification"]);

  useEffect(() => {
    const handlePermission = () => {
      return navigator.permissions
        .query({ name: "notifications" })
        .then((result) => {
          if (result.state === "prompt" && cookie.visitCount % 5 === 0)
            setTimeout(() => showNotificationModal(true), 0);
        })
        .catch((err) => console.log(err));
    };

    handlePermission();
  }, []);

  const dontAskAgain = () => {
    setCookie("showNotification", false, {
      path: "/",
      expires: new Date("Dec 31 2100"),
    });
    showNotificationModal(false);
  };

  if (notificationModal && cookie.showNotification !== "false")
    return (
      <div class="notification-modal-blur">
        <div class="notification-modal">
          <img
            src={window.location.origin + "/images/smartphone.png"}
            alt="notification"
          />
          <p class="notification-modal-title"> Enable Notifications? </p>
          <p class="notification-modal-text">
            Get notified when a new video or a blog is posted so that you never
            miss out on any of them.
          </p>
          <div class="notification-modal-button-container">
            <button onClick={() => showNotificationModal(false)}>
              Maybe Later
            </button>
            <button
              onClick={() => {
                subscribe.subscribeUser();
                showNotificationModal(false);
              }}
            >
              Yes, Enable
            </button>
          </div>
          <p class="notification-modal-deny" onClick={dontAskAgain}>
            Don't Ask Again?
          </p>
        </div>
      </div>
    );
  else return null;
};

export default Notification;
