import React from "react";

import "./Footer.css";
import logo from "./logo.png";

const Footer = (props) => {
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
            </div>
            <div className="footer-email">
              <h3> Contact Us </h3>
              <p>
                <i className="fa fa-envelope" />
                <a href="mailto:sjspiritual2020@gmail.com">
                  &nbsp;&nbsp;sjspiritual2020@gmail.com
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
                href="https://www.youtube.com/channel/UCa20s0nm63xe-trJQ10V63g/featured"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>Youtube</p>
              </a>
            </div>
            <div className="footer-related-sites">
              <h3> Related Sites </h3>
              <a
                href="https://mpsm.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p> MPSM </p>
              </a>
              <a
                href="http://crumbz.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p> Fr. Gerard's Website (crumbz.org)</p>
              </a>
              <a
                href="https://www.bombayjesuits.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p> Bombay Jesuits Official Website</p>
              </a>
              <a
                href="https://stmarysicse.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>St. Mary's School (ICSE), Mazagaon</p>
              </a>
              <a
                href="https://stmarysssc.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>St. Mary's School (SSC), Mazagaon</p>
              </a>
              <a
                href="https://holyfamilyandheri.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Holy Family School, Andheri</p>
              </a>
              <a
                href="http://stanislausbandra.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>St. Stanislaus School, Bandra</p>
              </a>
              <a
                href="http://xaviers.edu/main/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p> St. Xavier's College, Churchgate </p>
              </a>
              <a
                href="https://stxaviersfort.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p> St. Xavier's School, Fort </p>
              </a>
              <a
                href="http://www.xaviertech.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p> St. Xavier's Tech Institute, Mahim </p>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-text">
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Freepik
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer"
            >
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
