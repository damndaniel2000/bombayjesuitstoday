import React from "react";

import "./HomeCards.css";

const HomeCards = () => {
  return (
    <>
      <div
        className="home-card-container"
        style={{ backgroundColor: "#a0b5c6" }}
      >
        <div className="home-card">
          <div className="home-card-text">
            <div>
              <p>Join Us For The Daily Eucharist</p>
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
      </div>

      <div className="home-card-container" style={{ backgroundColor: "#fff" }}>
        <div className="home-card">
          <div className="home-card-img-container">
            <img
              src={window.location.origin + "/images/bible.png"}
              className="home-card-img"
            ></img>
          </div>
          <div className="home-card-text">
            <div>
              <p>Take A Deeper Look At The Gospel</p>
              <button> Gospel Insights </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="home-card-container"
        style={{ backgroundColor: "#a0b5c6" }}
      >
        <div className="home-card">
          <div className="home-card-text">
            <div>
              <p>Follow The Ignatian Spirituality</p>
              <button> Spirituality Videos </button>
            </div>
          </div>
          <div className="home-card-img-container">
            <img
              src={window.location.origin + "/images/dove.png"}
              className="home-card-img"
            ></img>
          </div>
        </div>
      </div>

      <div className="home-card-container" style={{ backgroundColor: "#fff" }}>
        <div className="home-card">
          <div className="home-card-img-container">
            <img
              src={window.location.origin + "/images/mission.png"}
              className="home-card-img"
            ></img>
          </div>
          <div className="home-card-text">
            <div>
              <p>Be A Part Of The Ignatian Mission</p>
              <button> Mission Videos </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="home-card-container"
        style={{ backgroundColor: "#a0b5c6" }}
      >
        <div className="home-card">
          <div className="home-card-text">
            <div>
              <p>Awaken The Reader In You</p>
              <button> Blogs </button>
            </div>
          </div>
          <div className="home-card-img-container">
            <img
              src={window.location.origin + "/images/blog.png"}
              className="home-card-img"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
