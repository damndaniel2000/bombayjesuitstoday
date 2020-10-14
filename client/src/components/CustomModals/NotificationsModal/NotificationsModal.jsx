import React from "react";
import { useCookies } from "react-cookie";
import { animated } from "react-spring";

import "./NotificationsModal.css";
import * as subscribe from "../../../serviceWorkers/subscription";

const Notification = ({ style, closeModal }) => {
  const [cookie, setCookie] = useCookies(["visitCount", "showNotification"]);

  const dontAskAgain = () => {
    setCookie("showNotificationModal", false, {
      path: "/",
      expires: new Date("Dec 31 2100"),
    });
    closeModal();
  };

  return (
    <>
      <animated.div style={style} className="notification-modal-blur">
        <div className="notification-modal">
          <img
            src={window.location.origin + "/images/smartphone.png"}
            alt="notification"
          />
          <p className="notification-modal-title"> Enable Notifications? </p>
          <p className="notification-modal-text">
            Get notified when a new video or a blog is posted so that you never
            miss out on any of them.
          </p>
          <div className="notification-modal-button-container">
            <button onClick={closeModal}>Maybe Later</button>
            <button onClick={closeModal}>Yes, Enable</button>
          </div>
          <p className="notification-modal-deny" onClick={dontAskAgain}>
            Don't Ask Again?
          </p>
        </div>
      </animated.div>
    </>
  );
};

export default Notification;
