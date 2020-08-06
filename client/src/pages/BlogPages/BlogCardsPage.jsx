import React, { useEffect } from "react";

import BlogCards from "../../components/Blogs/BlogCards/BlogCards";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ minHeight: "150vh" }}>
      <BlogCards />
    </div>
  );
};

export default BlogPage;
