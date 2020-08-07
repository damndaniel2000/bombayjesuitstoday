import React, { useEffect } from "react";

import BlogCards from "../../components/Blogs/BlogCards/BlogCards";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ minHeight: "150vh" }}>
      <br />
      <br />
      <br />
      <h1> The Blogs Are Currently Being Written... </h1>
    </div>
  );
};

export default BlogPage;
