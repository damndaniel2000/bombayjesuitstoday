import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

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

    return (
      <div className="blog-card" key={blog._id}>
        <img
          className="blog-card-img"
          src="https://picjumbo.com/wp-content/uploads/krivan-peak-slovakia-free-photo-2210x1473.jpg"
          alt=""
        />
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
