import React, { useState, useEffect } from "react";
import axios from "axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Spin } from "antd";
import { useHistory } from "react-router";

import "./BlogCards.css";

export default function Cards() {
  const [blogs, setBlogs] = useState([]);
  const history = useHistory();
  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    getBlogs();
    window.scrollTo(0, 0);
  }, []);

  const getBlogs = async () => {
    try {
      const response = await trackPromise(axios.get("/api/blogs"));
      setBlogs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const blogCards = blogs.map((blog) => {
    const postDate = new Date(blog.date);
    const date = postDate.getDate();
    const month = postDate.toLocaleString("default", { month: "long" });
    const year = postDate.getFullYear();
    const uploadTime = `${date} ${month}, ${year}`;

    if (blog.validated) {
      return (
        <div className="blog-card" key={blog._id}>
          <img className="blog-card-img" src={blog.imgLink} alt="" />
          <div className="blog-card-text">
            <p className="blog-card-title">{blog.title}</p>

            <div
              className="blog-card-lower-text"
              onClick={() => history.push("/blogs/content/" + blog._id)}
            >
              <p className="blog-card-author">
                By <b>{blog.author}</b>
              </p>
              <p className="blog-card-time">
                <i className="fa fa-clock-o" /> {uploadTime}
              </p>
              <button className="blog-card-button">Read</button>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <>
      {promiseInProgress ? (
        <div className="spinner">
          <Spin size="large" />
        </div>
      ) : (
        <div className="blog-cards-container">{blogCards}</div>
      )}
    </>
  );
}
