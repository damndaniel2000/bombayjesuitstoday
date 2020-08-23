import React from "react";
import { useHistory } from "react-router-dom";

import "./HomeBlogs.css";

const HomeBlogs = () => {
  const history = useHistory();
  return (
    <div className="home-blogs-container">
      <div className="home-blogs-title"> Blogs Section </div>
      <div className="home-blogs-cards-container">
        <div
          className="home-blogs-card"
          style={{
            backgroundImage:
              "url(https://picjumbo.com/wp-content/uploads/endless-hills-free-photo-2210x1473.jpg)",
            backgroundPosition: "bottom",
          }}
        >
          <div className="home-blogs-card-opacity">
            <div className="home-blogs-card-title">The Rock & Satan</div>
            <div className="home-blogs-card-content">
              Jesus renames Simon as Peter, which means ‘Rock’ – the foundation
              on which he will build his Church. He is chosen as a leader, but
              he and the others are to be the Church, the community, who will be
              called to feed the multitudes and bring them God’s compassion.
            </div>
            <button
              className="home-blogs-card-button"
              onClick={() =>
                history.push("/blogs/content/5f42116ce481e927e1a3708c")
              }
            >
              Read
            </button>
          </div>
        </div>

        <div
          className="home-blogs-card"
          style={{
            backgroundImage:
              "url(https://picjumbo.com/wp-content/uploads/lavender-free-photo-2210x1473.jpg)",
            backgroundPosition: "center left",
          }}
        >
          <div className="home-blogs-card-opacity">
            <div className="home-blogs-card-title">
              <span role="img" aria-label="fire">
                🔥
              </span>{" "}
              Spiritual Spark{" "}
              <span role="img" aria-label="fire">
                🔥
              </span>
            </div>
            <div className="home-blogs-card-content">
              Today on the feast of the Queenship of Mary, I wish to focus our
              attention to the gender inequality, which is prevalent even today.
              In many traditional families, men behave like scribes and
              Pharisees, unwilling to lift even a finger to help the women in
              the works of the house.
            </div>
            <button
              className="home-blogs-card-button"
              onClick={() =>
                history.push("/blogs/content/5f410b3a5995375f22ba719e")
              }
            >
              Read
            </button>
          </div>
        </div>

        <div
          className="home-blogs-card"
          style={{
            backgroundImage:
              "url(https://miro.medium.com/max/1200/0*pJquJWtfbEFK4ByN)",
            backgroundPosition: "center",
          }}
        >
          <div className="home-blogs-card-opacity">
            <div className="home-blogs-card-title">I Thirst</div>
            <div className="home-blogs-card-content">
              In the famous discussion with the Samaritan woman near the well,
              Jesus speaks of living water, which quenches the thirst (John
              4:1–15, NRSV). Interestingly one who offered the living water, and
              the one who turned the water into wine is thirsty during the
              passion. What are some of the explanations?
            </div>
            <button
              className="home-blogs-card-button"
              onClick={() =>
                history.push("/blogs/content/5f42285ee481e927e1a3708e")
              }
            >
              Read
            </button>
          </div>
        </div>
      </div>
      <button
        className="home-blogs-button"
        onClick={() => history.push("/blogs")}
      >
        Read More
      </button>
    </div>
  );
};

export default HomeBlogs;
