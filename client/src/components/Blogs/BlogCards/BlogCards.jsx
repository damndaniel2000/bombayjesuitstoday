import React, { useState, useEffect } from "react";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { Spin, Pagination } from "antd";
import { useHistory } from "react-router";

import "./BlogCards.css";

export default function Cards() {
  const [blogs, setBlogs] = useState([]);
  const [pageBlogs, setPageBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(Number);

  const [search, setSearch] = useState();
  const [noResult, setResult] = useState(false);
  const [dropdown, setShowDrop] = useState(false);
  const [dropSelect, setDropSelect] = useState("title");
  const [load, setLoad] = useState(true);

  const history = useHistory();

  useEffect(() => {
    getBlogs();
    window.scrollTo(0, 0);
  }, []);

  const getBlogs = async () => {
    try {
      const response = await trackPromise(axios.get("/api/blogs"));
      if (response.data.length !== 0) {
        setResult(false);
        setBlogs(response.data);
        setTotal(response.data.length);
      } else setResult(true);
      setLoad(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const onSearch = async () => {
      try {
        history.push({
          pathname: "/blogs",
          search: "?search=" + search,
        });
        const params = new URLSearchParams({
          type: dropSelect,
          search: search,
        }).toString();
        const res = await axios.get(`/api/blogs?${params}`);
        if (res.data.length !== 0) {
          setResult(false);
          setBlogs(res.data);
          setTotal(res.data.length);
        } else {
          setResult(true);
          setBlogs([]);
          setTotal(res.data.length);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (search !== undefined) onSearch();
  }, [search]);

  useEffect(() => {
    if (blogs.length >= 10) {
      let currentItems = (page - 1) * 10;
      if (page === 1) currentItems = 0;
      setPageBlogs(blogs.slice(currentItems, currentItems + 10));
      backtop();
    } else setPageBlogs(blogs);
  }, [blogs, page]);

  const backtop = () => {
    var scrollStep = -window.scrollY / (100 / 15),
      scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
      }, 15);
  };

  const blogCards =
    pageBlogs.length !== 0
      ? pageBlogs.map((blog) => {
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
        })
      : null;

  return (
    <>
      {load ? (
        <div className="spinner">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className="search-bar-container">
            {dropSelect !== "date" ? (
              <input
                className="search-bar"
                value={search || ""}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search Blogs"
              />
            ) : (
              <input
                type="date"
                className="search-bar"
                value={search || ""}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Blogs"
              />
            )}
            <div className="search-category-container">
              <button
                className="search-category"
                onClick={() => setShowDrop(!dropdown)}
              >
                By {dropSelect} &nbsp;
                <i className="fa fa-angle-down" />
              </button>
              {dropdown && (
                <div className="search-category-dropdown">
                  <span
                    onClick={() => {
                      setSearch("");
                      setDropSelect("title");
                      setShowDrop(false);
                    }}
                  >
                    Title
                  </span>
                  <span
                    onClick={(e) => {
                      setSearch("");
                      setDropSelect("author");
                      setShowDrop(false);
                    }}
                  >
                    Author
                  </span>
                  <span
                    onClick={() => {
                      setDropSelect("date");
                      setShowDrop(false);
                    }}
                  >
                    Date
                  </span>
                </div>
              )}
            </div>
          </div>

          <div>
            {noResult && <p className="no-search-found">No Blog Found</p>}
            <div className="blog-cards-container">{blogCards}</div>
          </div>
          <Pagination
            current={page}
            total={total}
            hideOnSinglePage={true}
            defaultPageSize={10}
            responsive={true}
            showSizeChanger={false}
            onChange={(page) => {
              setPage(page);
            }}
            style={{ margin: "80px auto" }}
          />
        </>
      )}
    </>
  );
}
