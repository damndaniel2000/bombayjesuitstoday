import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Cards() {
  const [blogs, setBlogs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs");
        setBlogs(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBlogs();
    window.scrollTo(0, 0);
  }, []);

  const blogCards = blogs.map((blog) => {
    const postDate = new Date(blog.date);
    const date = postDate.getDate();
    const month = postDate.toLocaleString("default", { month: "long" });
    const year = postDate.getFullYear();
    const uploadTime = `${date} ${month}, ${year}`;

    return (
      <div className="blog-card" key={blog._id}>
        <img className="blog-card-img" src={blog.imgLink} alt="Blog" />
        <div className="blog-card-text">
          <p className="blog-card-title">{blog.title}</p>

          <div
            className="blog-card-lower-text"
            onClick={() => history.push("/blogs/validate/" + blog._id)}
          >
            <p className="blog-card-author">
              By <b>{blog.author}</b>
            </p>
            <p className="blog-card-time">
              <i className="fa fa-clock-o" /> {uploadTime}
            </p>
            <button className="blog-card-button"> Edit </button>
          </div>
        </div>
      </div>
    );
  });

  return <div className="blog-cards-container">{blogCards}</div>;
}
