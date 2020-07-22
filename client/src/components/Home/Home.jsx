import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <div className="container">
        <div className="opacity-container">
          <div className="ggg-text-container">
            <p className="ggg-text">
              All for the <br /> Greater Glory of God
            </p>
          </div>
          <div className="video-button-container">
            <button
              onClick={() => history.push("/videos")}
              className="img-button"
            >
              <span className="img-button-text">Videos</span>
            </button>
          </div>
          <div className="blogs-button-container">
            <button className="img-button">
              <span className="img-button-text">Blogs</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
