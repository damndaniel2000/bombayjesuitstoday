import React from "react";

import "./HomeCounter.css";

const CounterSection = (props) => {
  return (
    <div className="counter-container">
      <div className="counter">
        <img
          className="home-counter-logo-left"
          src={window.location.origin + "/images/sjbutton.png"}
          alt="sj logo"
        />

        <span>{props.count}</span>

        <img
          className="home-counter-logo-right"
          src={window.location.origin + "/images/sjbutton.png"}
          alt="sj logo"
        />
        <p className="counter-message">
          This is the number of visits our website has had till right now.{" "}
          <br /> You Count In This Too 😃.
          <br /> Thank You For Helping Us Reach Here.{" "}
        </p>
      </div>
    </div>
  );
};

export default CounterSection;
