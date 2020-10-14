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
      return navigator.permissions
        .query({ name: "notifications" })
        .then((result) => {
          if (
            result.state === "prompt" &&
            cookies.showNotificationModal !== "false"
          )
            setTimeout(() => setModalVisible(true), 20000);
        })
        .catch((err) => console.log(err));
    };

    handlePermission();
  }, []);

  return (
    <>
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal
              style={animation}
              closeModal={() => setModalVisible(false)}
              key={key}
            />
          )
      )}
    </>
  );
};

export default ModalHandler;
