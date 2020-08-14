import React from "react";
import { Carousel } from "antd";
import HorizontalScroll from "react-scroll-horizontal";

const FollowCarousel = (props) => {
  const images = props.images;

  const carouselImages = images.map((img) => {
    return <img src={img} className="carousel-img" key={img} />;
  });

  const horizontalScroll = () => {
    document.getElementById("carousel-container").scrollLeft -= 30;
  };
  return (
    <>
      <section id="carousel-container">{carouselImages}</section>

      <p onClick={horizontalScroll} className="carousel-scroll">
        Scroll To View More Photos >
      </p>
    </>
  );
};

export default FollowCarousel;
