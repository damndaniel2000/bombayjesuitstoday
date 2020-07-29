import React from "react";

import "./Footer.css";
import logo from "./logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top-content">
          <img className="footer-logo" src={logo} alt="Jesuit Logo" />
          <div className="footer-text-container">
            <div className="footer-address">
              <h3>Address</h3>
              <address>
                <p>
                  Vinayalaya,
                  <br /> Mahakali Caves Road,
                  <br /> Andheri (East),
                  <br /> Mumbai - 400 093
                </p>
              </address>
              <div className="footer-email">
                <h3> Contact Us </h3>
                <p>
                  <i className="fa fa-envelope" />
                  <a href="mailto:sjspiritual2020@gmail.com">
                    &nbsp;sjspiritual2020@gmail.com
                  </a>
                </p>
                <p>
                  <i className="fa fa-phone" />{" "}
                  <a href="tel:02226871975">&nbsp;(022) 2687 1975</a>
                </p>
                <p>
                  <i className="fa fa-phone" />{" "}
                  <a href="tel:02226872192">&nbsp;(022) 2687 2192</a>
                </p>
              </div>
            </div>
            <div className="footer-social">
              <h3> Follow Us </h3>
              <a
                href="https://www.instagram.com/bombayjesuits/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>Instagram</p>
              </a>
              <a
                href="https://www.facebook.com/jesuitsmumbai/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>Facebook</p>
              </a>
              <a
                href="https://www.youtube.com/channel/UCVGPM2WMUjO8_dVa6IFLy9A"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>Youtube</p>
              </a>
            </div>
            <div className="footer-related-sites">
              <h3> Related Sites </h3>
              <a>
                <p>> Jesuit Curia in Rome </p>
              </a>
              <a>
                <p>> Jesuit Conference of South Asia </p>
              </a>
              <a>
                <p>> Universal Apostolic Preferences </p>
              </a>
              <a>
                <p>> Pope's Worldwide Prayer Network</p>
              </a>
              <a>
                <p>> Vatican Observatory</p>
              </a>
              <a>
                <p>> Lok Manch</p>
              </a>
              <a>
                <p>> JIVAN</p>
              </a>
              <a>
                <p>> IGNIS</p>
              </a>
              <a>
                <p>> America Magazine</p>
              </a>
              <a>
                <p>> Online Ministries</p>
              </a>
              <a>
                <p>> Ignatian Spirituality</p>
              </a>
              <a>
                <p>> Loyola Press</p>
              </a>
              <a>
                <p>> Bombay Jesuits Official Website</p>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-text">
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              {" "}
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <p>
            © Copyright <b>Jesuits Bombay Province</b>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
