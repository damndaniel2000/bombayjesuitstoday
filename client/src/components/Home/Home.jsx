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
            <p className="ggg-text">God's Greater Glory</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
