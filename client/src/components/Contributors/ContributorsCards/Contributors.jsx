import React, { usEffect } from "react";
import { Card, CardMedia, CardContent, makeStyles } from "@material-ui/core";

import "./Contributors.css";

import { videos, blogs, laity } from "./contriArrays";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: 350,
    backgroundSize: "contain",
  },
}));

const Contributors = () => {
  const classes = useStyles();
  const screenSize = window.screen.width;

  const contriCards = (arr) =>
    arr.map((item) => (
      <Card className="contributor-card">
        <CardMedia image={item.img} title={item.name} className={classes.img} />
        <CardContent>
          <h4 className="contributor-name">{item.name}</h4>
          <h6 className="contributor-location">{item.location}</h6>
          <p className="contributor-quote">{item.quote}</p>
        </CardContent>
      </Card>
    ));

  let el = document.querySelector(".scrollDiv");
  let x = 0,
    y = 0,
    top = 0,
    left = 0;

  let draggingFunction = (e) => {
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", draggingFunction);
    });
    if (el !== null) {
      el.scrollLeft = left - e.pageX + x;
      el.scrollTop = top - e.pageY + y;
    }
  };

  if (el !== null)
    el.addEventListener("mousedown", (e) => {
      e.preventDefault();

      y = e.pageY;
      x = e.pageX;
      top = el.scrollTop;
      left = el.scrollLeft;

      document.addEventListener("mousemove", draggingFunction);
    });

  return (
    <>
      <h3 className="contributor-title">Videos</h3>
      <div className="contributor-cards-container scrollDiv">
        {contriCards(videos)}
        <p className="contributor-scroll-text">
          {screenSize < 1000
            ? "Swipe to view more >"
            : "Scroll or Drag to view more>"}
        </p>
      </div>
      <h3 className="contributor-title">Laity</h3>
      <div className="contributor-cards-container">
        {contriCards(laity)}
        {screenSize < 1000 && (
          <p className="contributor-scroll-text"> Swipe to view more > </p>
        )}
      </div>

      <h3 className="contributor-title">Blogs</h3>
      <div className="contributor-cards-container">
        {contriCards(blogs)}
        {screenSize < 1000 && (
          <p className="contributor-scroll-text"> Swipe to view more > </p>
        )}
      </div>
    </>
  );
};

export default Contributors;
