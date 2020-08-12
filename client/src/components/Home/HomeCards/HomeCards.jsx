import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import MassModal from "../../Nav/MassModal/MassModal";
import "./HomeCards.css";

const HomeCards = () => {
  const [modal, setModal] = useState();
  const history = useHistory();

  const massModalToggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="home-card-container">
        <div className="home-card">
          <div className="home-card-text-container">
            <div>
              <p className="home-card-text">Join Us For The Daily Eucharist</p>
              <button
                className="home-card-button"
                onClick={() => setModal(!modal)}
              >
                {" "}
                Daily Mass{" "}
              </button>{" "}
              {modal && (
                <MassModal visible={modal} modalToggler={massModalToggle} />
              )}
              <br />
            </div>
          </div>
          <div className="home-card-img-container">
            <img
              src={window.location.origin + "/images/church.png"}
              alt="Freepik Icon"
              className="home-card-img"
            ></img>
          </div>
        </div>
      </div>

      <div className="home-card-container">
        <div className="home-card-reverse">
          <div className="home-card-text-container">
            <div>
              <p className="home-card-text">Take A Deeper Look At The Gospel</p>
              <button
                onClick={() => history.push("/videos/gospel")}
                className="home-card-button"
              >
                Gospel Insights
              </button>
            </div>
          </div>
          <div className="home-card-img-container">
            <img
              src={window.location.origin + "/images/bible.png"}
              alt="Freepik Icon"
              className="home-card-img"
            ></img>
          </div>
        </div>
      </div>

      <div className="home-card-container">
        <div className="home-card">
          <div className="home-card-text-container">
            <div>
              <p className="home-card-text">Follow The Ignatian Spirituality</p>
              <button
                onClick={() => history.push("/videos/spiritual")}
                className="home-card-button"
              >
                Spirituality Videos
              </button>
            </div>
          </div>
          <div className="home-card-img-container">
            <img
              src={window.location.origin + "/images/dove.png"}
              alt="Freepik Icon"
              className="home-card-img"
            ></img>
          </div>
        </div>
      </div>

      <div className="home-card-container">
        <div className="home-card-reverse">
          <div className="home-card-text-container">
            <div>
              <p className="home-card-text">
                Be A Part Of The Ignatian Mission
              </p>
              <button
                onClick={() => history.push("/videos/mission")}
                className="home-card-button"
              >
                Mission Videos
              </button>
            </div>
          </div>
          <div className="home-card-img-container">
            <img
              src={window.location.origin + "/images/mission.png"}
              alt="Freepik Icon"
              className="home-card-img"
            ></img>
          </div>
        </div>
      </div>

      <div className="home-card-container">
        <div className="home-card">
          <div className="home-card-text-container">
            <div>
              <p className="home-card-text">Awaken The Reader In You</p>
              <button
                onClick={() => history.push("/blogs")}
                className="home-card-button"
              >
                {" "}
                Blogs{" "}
              </button>
            </div>
          </div>
          <div className="home-card-img-container">
            <img
              src={window.location.origin + "/images/blog.png"}
              alt="Freepik Icon"
              className="home-card-img"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
