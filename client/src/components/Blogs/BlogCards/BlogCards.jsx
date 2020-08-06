import React from "react";

import "./BlogCards.css";

export default function Cards() {
  return (
    <div className="blog-cards-container">
      <div className="blog-card">
        <img
          className="blog-card-img"
          src="https://picjumbo.com/wp-content/uploads/krivan-peak-slovakia-free-photo-2210x1473.jpg"
          alt=""
        />
        <div className="blog-card-text">
          <p className="blog-card-title">
            Build Websites the Easy Way with Sparkle Pro
          </p>
          <p className="blog-card-author">
            By <b>Ian D'souza</b>
          </p>
          <p className="blog-card-time">
            <i className="fa fa-clock-o" /> 08/01/2020, 4:30 pm
          </p>
          <button className="blog-card-button"> Read </button>
        </div>
      </div>
    </div>
  );
}
