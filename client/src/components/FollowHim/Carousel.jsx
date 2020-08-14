import React, { useRef } from "react";
import { Carousel } from "antd";
import HorizontalScroll from "react-scroll-horizontal";

const FollowCarousel = (props) => {
  const images = props.images;
  const container = useRef();

  const carouselImages = images.map((img) => {
    return <img src={img} className="carousel-img" key={img} />;
  });

  const leftScroll = () => {
    container.current.scrollLeft += 500;
  };
  const rightScroll = () => {
    container.current.scrollLeft -= 500;
  };
  return (
    <>
      <section ref={container} id="carousel-container">
        {carouselImages}
      </section>
      <div className="carousel-scroll-container">
        <img
          onClick={rightScroll}
          src={window.location.origin + "/images/leftarrow.png"}
          alt="Freepik Icon"
          className="carousel-arrow"
        ></img>
        <div className="carousel-scroll">Scroll To View More Photos ></div>
        <img
          onClick={leftScroll}
          src={window.location.origin + "/images/rightarrow.png"}
          alt="Freepik Icon"
          className="carousel-arrow"
        ></img>
      </div>
    </>
  );
};

export default FollowCarousel;
