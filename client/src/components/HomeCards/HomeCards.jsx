import React from "react";

import "./HomeCards.css";

const HomeCards = () => {
  return (
    <>
      <div className="home-card">
        <div className="home-card-text">
          <div>
            <p>Join Us for the Daily Eucharist</p>
            <button> Daily Mass </button>
          </div>
        </div>
        <div className="home-card-img-container">
          <img
            src={window.location.origin + "/images/church.png"}
            className="home-card-img"
          ></img>
        </div>
      </div>

      <div className="home-card">
        <div className="home-card-img-container">
          <img
            src={window.location.origin + "/images/bible.png"}
            className="home-card-img"
          ></img>
        </div>
        <div className="home-card-text">
          <div>
            <p>Understand the Gospel</p>
            <button> Gospel Insights </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
