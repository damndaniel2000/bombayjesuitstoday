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
              "url(https://picjumbo.com/wp-content/uploads/lavender-free-photo-2210x1473.jpg)",
            backgroundPosition: "bottom",
          }}
        >
          <div className="home-blogs-card-opacity">
            <div className="home-blogs-card-title">🔥 Spiritual Spark 🔥</div>
            <div className="home-blogs-card-content">
              We all like to be in good terms with others; that is why we like
              to speak sweet and pleasant words. But those who speak sweet and
              pleasant words are not always our well-wishers. When we truly care
              for others, we occasionally use bitter words to correct them. We
              all know that very often truth is bitter and lie is sweet. That is
              why medicine is often bitter.
            </div>
            <button
              className="home-blogs-card-button"
              onClick={() =>
                history.push("/blogs/content/5f3634822a5d7d5dce7eec2b")
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
