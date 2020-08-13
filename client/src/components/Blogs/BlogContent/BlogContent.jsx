import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

import ShareButtons from "./ShareButton";

function BlogContent(props) {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getBlog();
    window.scrollTo(0, 0);
  }, []);

  const getBlog = () => {
    axios
      .get("/api/blogs/" + props.match.params.id)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="blog-container">
        <span className="blog-title">{blog.title}</span>
        <br />
        <span className="blog-author">By {blog.author}</span>
        <div
          className="blog-img"
          style={{
            backgroundImage: `url(${blog.imgLink})`,
          }}
        ></div>
        <p className="blog-content">{ReactHtmlParser(blog.blogContent)}</p>
      </div>
      <div>
        <ShareButtons
          link={`http://bombayjesuitstoday.com/blogs/content/${id}`}
        />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default withRouter(BlogContent);
