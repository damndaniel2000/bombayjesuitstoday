import React from "react";

import "./HomeCounter.css";

const CounterSection = (props) => {
  return (
    <div className="counter-container">
      <div className="counter">
        <span>{props.count}</span>
        <p className="counter-message">
          This is the number of visits our website has had till right now.{" "}
          <br /> You Count In This Too <i className="fa fa-smile-o" />
          <br /> Thank You For Helping Us Reach Here.{" "}
        </p>
      </div>
    </div>
  );
};

export default CounterSection;
