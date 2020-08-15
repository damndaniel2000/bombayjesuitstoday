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
              "url(https://picjumbo.com/wp-content/uploads/D0101269-2210x1473.jpg)",
            backgroundPosition: "bottom",
          }}
        >
          <div className="home-blogs-card-opacity">
            <div className="home-blogs-card-title">A Widow's Mite</div>
            <div className="home-blogs-card-content">
              Widow’s mite is a word-combination added to the English language,
              thanks to the scenes in the Gospel of Mark and Luke. We will try
              to look a little closer into the story, especially from the
              perspective of the gospel of Mark.
            </div>
            <button
              className="home-blogs-card-button"
              onClick={() =>
                history.push("/blogs/content/5f353dc2ed887f61acaa55bf")
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
              "url(https://cdn.pixabay.com/photo/2018/08/15/07/19/indian-flag-3607410_1280.jpg)",
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
              Today, on the 74th Independence Day of our beloved Mother India,
              the picture of the dragon and the woman from the book of
              Revelation makes a lot of sense. The seven-headed dragon of
              communalism, corruption, poverty, inequality, environmental
              degradation, health crisis, and unemployment...
            </div>
            <button
              className="home-blogs-card-button"
              onClick={() =>
                history.push("/blogs/content/5f376008041e0629eef814a2")
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
              "url(https://picjumbo.com/wp-content/uploads/pouring-water-from-pet-bottle-into-a-glass_free_stock_photos_picjumbo_DSC03741-2210x1474.jpg)",
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
                history.push("/blogs/content/5f3535e43501de64e35b8a27")
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
