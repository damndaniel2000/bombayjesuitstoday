import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import ReactHtmlParser from "react-html-parser";

import ShareButtons from "./ShareButton";

function BlogContent(props) {
  const [blog, setBlog] = useState([]);
  const { promiseInProgress } = usePromiseTracker();
  const { id } = useParams();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await trackPromise(
          axios.get("/api/blogs/" + props.match.params.id)
        );
        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getBlog();
    window.scrollTo(0, 0);
  }, [props.match.params.id]);

  return (
    <>
      {promiseInProgress ? (
        <div className="spinner">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className="blog-container">
            <div className="blog-title">{blog.title}</div>
            <br />
            <div className="blog-author">By {blog.author}</div>
            <div
              className="blog-img"
              style={{
                backgroundImage: `url(${blog.imgLink})`,
              }}
            ></div>
            <p className="blog-content">{ReactHtmlParser(blog.blogContent)}</p>
          </div>
          <ShareButtons
            link={`https://bombayjesuitstoday.com/blogs/content/${id}`}
          />
          <br />
          <br />
          <br />
        </>
      )}
    </>
  );
}

export default withRouter(BlogContent);
