import React from "react";
import { useCookies } from "react-cookie";
import { animated } from "react-spring";
import { Link } from "react-router-dom";

import "./CookiesModal.css";

const CookieModal = (props) => {
  return (
    <animated.div style={props.style} className="cookie-modal">
      <p>
        <b>We use cookies</b> to enhance your experience on our website. You can
        read how our cookies are being used{" "}
        <Link
          to="/privacy-policy"
          style={{ color: "cyan", textDecoration: "underline" }}
        >
          here
        </Link>
        . By continuing to use our site, you consent to use our cookies.
      </p>
      <div style={{ alignSelf: "center" }}>
        <button onClick={props.acceptCookie}> Close </button>
      </div>
    </animated.div>
  );
};

export default CookieModal;
