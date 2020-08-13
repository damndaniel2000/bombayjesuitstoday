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
              "url(https://picjumbo.com/wp-content/uploads/stoney-bridge-between-cliffs-in-portugal-2210x1473.jpg)",
            backgroundPosition: "bottom",
          }}
        >
          <div className="home-blogs-card-opacity">
            <div className="home-blogs-card-title">Two-Step Healing</div>
            <div className="home-blogs-card-content">
              “They came to Bethsaida, and some people brought a blind man and
              begged Jesus to touch him. He took the blind man by the hand and
              led him outside the village. When he had spit on the man’s eyes
              and put his hands on him, Jesus asked, ‘Do you see anything?’ He
              looked up and said, ‘I see people; they look like trees walking
              around.’"
            </div>
            <button
              className="home-blogs-card-button"
              onClick={() =>
                history.push("/blogs/content/5f353ed6ed887f61acaa55c1")
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
