import React, { useState, useEffect } from "react";
import { Card, CardMedia, CardContent, makeStyles } from "@material-ui/core";

import "./Contributors.css";

import { videos, blogs, laity } from "./contriArrays";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: 350,
    backgroundSize: "contain",
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
  },
}));

const Contributors = () => {
  const classes = useStyles();
  const screenSize = window.screen.width;

  const [divId, setDiv] = useState(null);

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

  useEffect(() => setDiv(document.getElementById("scrollDiv")), []);

  let x = 0,
    y = 0,
    top = 0,
    left = 0;

  let draggingFunction = (e) => {
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", draggingFunction);
    });
    if (divId !== null) {
      divId.scrollLeft = left - e.pageX + x;
      divId.scrollTop = top - e.pageY + y;
    }
  };

  if (divId !== null)
    divId.addEventListener("mousedown", (e) => {
      e.preventDefault();

      y = e.pageY;
      x = e.pageX;
      top = divId.scrollTop;
      left = divId.scrollLeft;

      document.addEventListener("mousemove", draggingFunction);
    });

  return (
    <>
      <h3 className="contributor-title">Videos</h3>
      <div id="scrollDiv" className="contributor-cards-container">
        {contriCards(videos)}
      </div>
      <p className="contributor-scroll-text">
        {screenSize < 1000
          ? "Swipe to view more >"
          : "Scroll or Drag to view more>"}
      </p>

      <h3 className="contributor-title">Laity</h3>
      <div className="contributor-cards-container">{contriCards(laity)}</div>
      {screenSize < 1000 && (
        <p className="contributor-scroll-text"> Swipe to view more > </p>
      )}

      <h3 className="contributor-title">Blogs</h3>
      <div className="contributor-cards-container">{contriCards(blogs)}</div>
      {screenSize < 1000 && (
        <p className="contributor-scroll-text"> Swipe to view more > </p>
      )}
    </>
  );
};

export default Contributors;
