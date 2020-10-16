import React, { useState, useEffect } from "react";
import { useTransition } from "react-spring";
import { useCookies } from "react-cookie";

import Modal from "./CookiesModal.jsx";

const ModalHandler = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cookies, setCookie] = useCookies([
    "visitCount",
    "showNotificationModal",
  ]);
  const transition = useTransition(modalVisible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    if (cookies.visitCount >= 0) {
      let currentVisit = parseInt(cookies.visitCount) + 1;
      setCookie("visitCount", currentVisit, {
        path: "/",
        expires: new Date("Dec 31 2100"),
      });
    }
    setTimeout(() => setModalVisible(true), 10000);
  }, []);

  const acceptCookie = () => {
    setCookie("visitCount", 0, {
      path: "/",
      expires: new Date("Dec 31 2100"),
    });
    setModalVisible(false);
  };

  if (cookies.visitCount === undefined && modalVisible) {
    return (
      <>
        {transition.map(
          ({ item, key, props: animation }) =>
            item && (
              <Modal
                style={animation}
                closeModal={() => setModalVisible(false)}
                key={key}
                acceptCookie={acceptCookie}
              />
            )
        )}
      </>
    );
  } else return null;
};

export default ModalHandler;
