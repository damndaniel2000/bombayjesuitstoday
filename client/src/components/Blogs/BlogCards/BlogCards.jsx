import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  Fab,
  Zoom,
  useScrollTrigger,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Skeleton, Pagination } from "@material-ui/lab";

import "./BlogCards.css";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyle = makeStyles((theme) => ({
  cardButton: {
    fontSize: 12,
    borderRadius: 50,
    padding: "2px 5px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      padding: "2px 8px",
      minHeight: 0,
      minWidth: 0,
    },
  },
  skeletonImg: {
    height: 350,
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  upArrow: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  },
}));

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

  const trigger = useScrollTrigger({ threshold: 200 });
  const history = useHistory();
  const classes = useStyle();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs");
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
    getBlogs();
    window.scrollTo(0, 0);
  }, []);

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

    //eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    if (blogs.length >= 10) {
      let currentItems = (page - 1) * 10;
      if (page === 1) currentItems = 0;
      setPageBlogs(blogs.slice(currentItems, currentItems + 10));
    } else setPageBlogs(blogs);
  }, [blogs, page]);

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
              <Card className="blog-card" key={blog._id}>
                <CardMedia
                  className="blog-card-img"
                  image={blog.imgLink}
                  alt={"Blog by " + blog.author}
                />
                <div className="blog-card-text">
                  <Typography variant="p" className="blog-card-title">
                    {blog.title}
                  </Typography>

                  <div
                    className="blog-card-lower-text"
                    onClick={() => history.push("/blogs/content/" + blog._id)}
                  >
                    <Typography variant="p" className="blog-card-author">
                      {blog.author}
                    </Typography>
                    <Typography variant="p" className="blog-card-time">
                      {uploadTime}
                    </Typography>
                    <div>
                      <Button
                        color="primary"
                        variant="contained"
                        className={classes.cardButton}
                      >
                        Read
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          } else {
            return null;
          }
        })
      : null;

  return (
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

      {load ? (
        <div className="blog-cards-container">
          {[0, 0, 0, 0, 0, 0].map((item) => (
            <Card className="blog-card">
              <Skeleton variant="rect" className={classes.skeletonImg} />
              <div className="blog-card-text">
                <Skeleton
                  className="blog-card-title"
                  style={{ width: "100%" }}
                />
                <Skeleton
                  className="blog-card-title"
                  style={{ width: "100%" }}
                />
                <div
                  className="blog-card-lower-text"
                  style={{ display: "block" }}
                >
                  <Skeleton
                    variant="rect"
                    className="blog-card-author"
                    style={{ width: "100px", marginBottom: "10px" }}
                  />
                  <Skeleton
                    variant="rect"
                    className="blog-card-time"
                    style={{ width: "100px" }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <>
          <div>
            {noResult && <p className="no-search-found">No Blog Found</p>}
            <div className="blog-cards-container">{blogCards}</div>
          </div>
          <div className="pagination-container">
            <Pagination
              count={Math.floor(total / 10)}
              color="secondary"
              size={matchesXS ? "small" : "large"}
              page={page}
              onChange={(e, page) => setPage(page)}
            />
          </div>
        </>
      )}
      <Zoom in={trigger}>
        <Fab
          color="primary"
          size="small"
          className={classes.upArrow}
          onClick={() => window.scrollTo(0, 0)}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </>
  );
}
