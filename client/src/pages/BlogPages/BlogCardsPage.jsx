import React, { useEffect } from "react";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ minHeight: "150vh" }}>
      <br />
      <br />
      <br />
      <video width="400" height="400" autoplay="true" loop="true">
        <source
          src={window.location.origin + "/images/giphy.mp4"}
          type="video/mp4"
        />
      </video>
      <h2> This Page is Under Construction </h2>
    </div>
  );
};

export default BlogPage;
