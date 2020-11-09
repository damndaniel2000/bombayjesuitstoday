import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import ReactHtmlParser from "react-html-parser";
import { Typography, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import "./BlogContent.css";

import ShareButtons from "./ShareButton";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "zilla slab",
    fontSize: 30,
    fontWeight: 700,
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0 1rem",
      fontSize: 25,
    },
  },
  author: {
    fontSize: 16,
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      margin: "1rem",
    },
  },
  content: {
    textAlign: "justify",
    marginTop: "3rem",
    fontSize: 20,
    fontFamily: "zilla slab",
    display: "block",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      width: "95%",
      margin: "0 auto",
    },
  },
  imgLoader: {
    height: 400,
    [theme.breakpoints.down("xs")]: {
      height: 150,
    },
  },
}));

function BlogContent(props) {
  const [blog, setBlog] = useState([]);
  const [isLoading, setLoad] = useState(true);
  const { id } = useParams();
  const classes = useStyles();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await axios.get("/api/blogs/" + props.match.params.id);

        setBlog(res.data);
        setLoad(false);
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    };

    getBlog();
    window.scrollTo(0, 0);
  }, [props.match.params.id]);

  return (
    <>
      <>
        <div className="blog-container">
          <Typography variant="h4" color="primary" className={classes.title}>
            {isLoading
              ? [0, 0].map(() => (
                  <Skeleton variant="rect" style={{ marginBottom: 10 }} />
                ))
              : blog.title}
          </Typography>

          <Typography variant="h5" className={classes.author}>
            {isLoading ? (
              <Skeleton
                variant="rect"
                style={{ marginBottom: 10, width: "20%" }}
              />
            ) : (
              <>By {blog.author}</>
            )}
          </Typography>
          {isLoading ? (
            <Skeleton variant="rect" className={classes.imgLoader} />
          ) : (
            <div
              className="blog-img"
              style={{
                backgroundImage: `url(${blog.imgLink})`,
              }}
            ></div>
          )}
          <Typography variant="p" className={classes.content}>
            {isLoading
              ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
                  <Skeleton variant="rect" style={{ marginBottom: 10 }} />
                ))
              : ReactHtmlParser(blog.blogContent)}
          </Typography>
        </div>
        <ShareButtons
          link={`https://bombayjesuitstoday.com/blogs/content/${id}`}
        />
        <br />
        <br />
        <br />
      </>
    </>
  );
}

export default withRouter(BlogContent);
