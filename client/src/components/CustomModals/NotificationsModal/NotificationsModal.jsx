import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useTransition, animated } from "react-spring";

import "./NotificationsModal.css";
import * as subscribe from "../../../serviceWorkers/subscription";

const Notification = () => {
  const [notificationModal, showNotificationModal] = useState(false);
  const [cookie, setCookie] = useCookies(["visitCount", "showNotification"]);
  const transition = useTransition(notificationModal, null, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" },
  });

  useEffect(() => {
    const handlePermission = () => {
      return navigator.permissions
        .query({ name: "notifications" })
        .then((result) => {
          if (result.state === "prompt")
            setTimeout(() => showNotificationModal(true), 2000);
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

  return (
    <>
      {notificationModal && cookie.showNotification !== "false"
        ? transition.map(({ item, key, props: style }) => (
            <div className="notification-modal-blur">
              <animated.div className="notification-modal" style={style}>
                <img
                  src={window.location.origin + "/images/smartphone.png"}
                  alt="notification"
                />
                <p className="notification-modal-title">
                  {" "}
                  Enable Notifications?{" "}
                </p>
                <p className="notification-modal-text">
                  Get notified when a new video or a blog is posted so that you
                  never miss out on any of them.
                </p>
                <animated.div
                  className="notification-modal-button-container"
                  style={transition}
                >
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
                </animated.div>
                <p className="notification-modal-deny" onClick={dontAskAgain}>
                  Don't Ask Again?
                </p>
              </animated.div>
            </div>
          ))
        : null}
    </>
  );
};

export default Notification;
