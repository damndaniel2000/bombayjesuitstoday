import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

import "./BlogCards.css";

export default function Cards() {
  const [blogs, setBlogs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getBlogs();
    window.scrollTo(0, 0);
  }, []);

  const getBlogs = async () => {
    try {
      const response = await axios.get("/api/blogs");
      setBlogs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const blogCards = blogs.map((blog) => {
    const timestamp = blog._id.toString().substring(0, 8);
    const hours = new Date(
      parseInt(timestamp, 16) * 1000
    ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    const day = new Date(parseInt(timestamp, 16) * 1000).getDate().toString();
    const month = new Date(parseInt(timestamp, 16) * 1000)
      .getMonth()
      .toString();
    const uploadTime = `${day}/${month}, ${hours} `;

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

  return <div className="blog-cards-container">{blogCards}</div>;
}
