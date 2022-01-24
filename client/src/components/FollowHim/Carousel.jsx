import React, { useRef } from "react";

const FollowCarousel = (props) => {
  const images = props.images;
  const container = useRef();

  const [divId, setDiv] = React.useState(null);

  const carouselImages = images.map((img) => {
    return <img src={img} className="carousel-img" alt="carousel" key={img} />;
  });

  const leftScroll = () => {
    container.current.scrollLeft += 500;
  };
  const rightScroll = () => {
    container.current.scrollLeft -= 500;
  };

  React.useEffect(() => setDiv(document.querySelector(`#${props.id}`)), []);

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
      <section ref={container} id={props.id} className="carousel-container">
        {carouselImages}
      </section>
      <div className="carousel-scroll-container">
        <div className="carousel-scroll">Drag To View More Photos ></div>
      </div>
    </>
  );
};

export default FollowCarousel;
