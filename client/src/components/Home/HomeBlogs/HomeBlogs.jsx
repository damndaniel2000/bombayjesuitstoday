import React from "react";
import { Button, Paper, makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

import "./HomeBlogs.css";
import { blogs } from "./blogs";

const useStyles = makeStyles({
  subscribe: {
    background: "rgb(255,255,255,0.5)",
    color: "#fff",
    fontSize: 10,
    letterSpacing: 1.4,
    borderRadius: 0,
    textTransform: "uppercase",
  },
});

const HomeBlogs = () => {
  const [active, setActive] = React.useState(0);

  const classes = useStyles();

  const goToNext = () => {
    if (active < 2) setActive(active + 1);
    else setActive(0);
  };
  const goToPrev = () => {
    if (active > 0) setActive(active - 1);
    else setActive(2);
  };

  return (
    <div className="home-blogs-container">
      <div className="home-blogs-carousel-container">
        <div>
          <Carousel
            animation="slide"
            autoPlay={false}
            indicators={false}
            next={goToNext}
            prev={goToPrev}
            navButtonsAlwaysVisible
          >
            {blogs.map((item) => (
              <img className="home-blogs-img" src={item.blogImg} />
            ))}
          </Carousel>
        </div>
        <div className="home-blogs-content-outer">
          <div className="home-blogs-content-inner">
            <div>
              <Carousel
                index={active}
                indicators={false}
                autoPlay={false}
                navButtonsAlwaysInvisible
              >
                {blogs.map((item) => (
                  <>
                    <h3> {item.title} </h3>
                    <p>{item.content}</p>
                  </>
                ))}
              </Carousel>
            </div>
            <div>
              <Button
                color="primary"
                style={{ textTransform: "uppercase", fontSize: ".7rem" }}
              >
                Read Full
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-blogs-last-container">
        <Paper elevation={4} className="home-blog-author-container">
          <Carousel
            index={active}
            indicators={false}
            autoPlay={false}
            navButtonsAlwaysInvisible
          >
            {blogs.map((item) => (
              <>
                <img src={item.img} />
                <h3> {item.name}</h3>
                <h4> Chakala, Mumbai </h4>
              </>
            ))}
          </Carousel>
        </Paper>
        <Paper
          style={{ backgroundColor: "#061178", color: "#fff" }}
          className="home-blogs-subscribe-container"
        >
          <h3> Get Notified ! </h3>
          <p>
            Never miss a single blog or video by getting a notification when
            something new is posted
          </p>
          <Button variant="contained" className={classes.subscribe}>
            Subscribe
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default HomeBlogs;
