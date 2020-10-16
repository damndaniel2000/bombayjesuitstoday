import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useTransition } from "react-spring";

import Modal from "./NotificationsModal.jsx";

const ModalHandler = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cookies, setCookie] = useCookies([
    "visitCount",
    "showNotificationModal",
  ]);
  const transition = useTransition(modalVisible, null, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" },
  });

  useEffect(() => {
    const handlePermission = () => {
      const currentVisit = parseInt(cookies.visitCount);
      console.log(currentVisit % 8);
      return navigator.permissions
        .query({ name: "notifications" })
        .then((result) => {
          if (
            result.state === "prompt" &&
            cookies.showNotificationModal !== "false"
          ) {
            if (
              (cookies.visitCount === undefined || currentVisit % 8 === 0) &&
              currentVisit !== 0
            )
              setTimeout(() => setModalVisible(true), 2000);
          }
        })
        .catch((err) => console.log(err));
    };

    handlePermission();
  }, []);

  const dontAskAgain = () => {
    setCookie("showNotificationModal", false, {
      path: "/",
      expires: new Date("Dec 31 2100"),
    });
    setModalVisible(false);
  };

  return (
    <>
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal
              style={animation}
              closeModal={() => setModalVisible(false)}
              key={key}
              dontAskAgain={dontAskAgain}
            />
          )
      )}
    </>
  );
};

export default ModalHandler;
