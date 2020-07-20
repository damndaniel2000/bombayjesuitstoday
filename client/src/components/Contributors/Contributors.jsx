import React from "react";
import { Card, Avatar } from "antd";

import "./Contributors.css";

const Contributors = () => {
  return (
    <>
      <div className="contributors-card">
        <div className="contributors-card-photo">
          <img
            className="contributors-avatar"
            src="https://www.denofgeek.com/wp-content/uploads/2020/07/batman-100-new-suit.jpg"
          />
        </div>
        <div className="contributors-card-details">
          <div>
            <p className="contributors-card-name"> Ian D'souza </p>
            <p className="contributors-card-location"> Mumbai </p>
            <blockquote>
              " Rage, Rage against the dying of the light "
            </blockquote>
          </div>
          <div>
            <a
              href="https://medium.muz.li/50-user-profile-page-design-inspiration-5c45aeeda400"
              target="_blank"
            >
              <button className="contributors-card-link">Videos</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contributors;
