import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import "./CookiesModal.css";

const CookieModal = () => {
  const [cookies, setCookie] = useCookies(["visitCount"]);
  const [cookieModal, showCookie] = useState(false);

  useEffect(() => {
    if (cookies.visitCount >= 0) {
      let currentVisit = parseInt(cookies.visitCount) + 1;
      setCookie("visitCount", currentVisit, {
        path: "/",
        expires: new Date("Dec 31 2100"),
      });
    }
    showCookie(true);
  }, []);

  const acceptCookie = () => {
    setCookie("visitCount", 0, {
      path: "/",
      expires: new Date("Dec 31 2100"),
    });
  };

  if (cookies.visitCount === undefined && cookieModal)
    return (
      <div class="cookie-modal">
        <p>
          <b>We use cookies</b> to enhance your experience on our website. You
          can read how our cookies are being used{" "}
          <Link
            to="/privacy-policy"
            style={{ color: "cyan", textDecoration: "underline" }}
          >
            here
          </Link>
          . By continuing to use our site, you consent to use our cookies.
        </p>
        <div style={{ alignSelf: "center" }}>
          <button onClick={acceptCookie}> Close </button>
        </div>
      </div>
    );
  else return null;
};

export default CookieModal;
