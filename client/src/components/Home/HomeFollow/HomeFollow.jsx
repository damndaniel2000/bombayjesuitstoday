import React from "react";
import { useHistory } from "react-router-dom";

import "./HomeFollow.css";

const Follow = () => {
  const history = useHistory();

  return (
    <div className="home-follow-container">
      <div className="home-follow-button-container">
        <button
          onClick={() => history.push("/follow-him")}
          className="home-follow-button"
        >
          Follow Him
        </button>
      </div>
      <img
        className="home-follow-img"
        src={window.location.origin + "/images/follow.png"}
        alt="follow him"
      />
    </div>
  );
};

export default Follow;
