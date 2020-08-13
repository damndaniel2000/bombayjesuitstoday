import React from "react";

import "./HomeFollow.css";

const Follow = () => {
  return (
    <div className="home-follow-container">
      <div className="home-follow-button-container">
        <button className="home-follow-button"> Follow Me </button>
      </div>
      <img
        className="home-follow-img"
        src={window.location.origin + "/images/follow.png"}
      />
    </div>
  );
};

export default Follow;
