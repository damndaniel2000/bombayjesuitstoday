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
              "url(https://cdn.pixabay.com/photo/2018/07/19/20/16/coneflower-3549331_960_720.jpg)",
            backgroundPosition: "bottom",
          }}
        >
          <div className="home-blogs-card-opacity">
            <div className="home-blogs-card-title">Not Words, But Deeds</div>
            <div className="home-blogs-card-content">
              When he asked people to raise their hands to indicate if they
              would come, about 70% of the 500 people present raised their
              hands. He fixed the following Saturday as the day on which they
              would go out to help. When the day came, five people turned up.
              They said, but did not do. They had words but no action.
            </div>
            <button
              className="home-blogs-card-button"
              onClick={() =>
                history.push("/blogs/content/5f702731ccaaa56f60a63766")
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
              "url(https://cdn.pixabay.com/photo/2018/08/11/20/37/church-3599448_960_720.jpg)",
            backgroundPosition: "center",
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
              Life is unpredictable and uncertain. So-called good, gentle person
              can turn murderous and so-called evil thug can become life-saver.
              Transformation in our behaviour is always possible. History is
              full of such stories of transformation.
            </div>
            <button
              className="home-blogs-card-button"
              onClick={() =>
                history.push("/blogs/content/5f702601ccaaa56f60a63765")
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
