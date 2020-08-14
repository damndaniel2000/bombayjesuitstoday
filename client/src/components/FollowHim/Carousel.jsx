import React from "react";
import { Carousel } from "antd";

const FollowCarousel = (props) => {
  const images = props.images;

  const carouselImages = images.map((img) => {
    return <img src={img} className="carousel-img" />;
  });
  return (
    <>
      <section className="carousel-container">{carouselImages}</section>
      <p className="carousel-scroll"> Scroll To View More Photos ></p>
    </>
  );
};

export default FollowCarousel;
/*<div className="carousel-arrows">
	<img
		className="carousel-arrow-icon"
		src={window.location.origin + "/images/leftarrow.png"}
	/>
	<img
		className="carousel-arrow-icon"
		src={window.location.origin + "/images/rightarrow.png"}
	/>
</div>*/
