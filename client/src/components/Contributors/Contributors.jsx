import React from "react";
import { Card, Avatar } from "antd";

import "./Contributors.css";

const Contributors = () => {
  return (
    <>
      <div className="contributors-card">
        <div className="contributors-card-photo">
          <Avatar
            size={200}
            src="https://www.denofgeek.com/wp-content/uploads/2020/07/batman-100-new-suit.jpg"
          />
        </div>
        <div className="contributors-card-details">
          <span> Ian D'souza </span>
          <span> Mumbai </span>
          <span>" Rage, Rage against the dying of the light "</span>
        </div>
      </div>
    </>
  );
};

export default Contributors;
