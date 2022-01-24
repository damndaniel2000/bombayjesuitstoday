import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { useHistory, useParams } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import ReactHtmlParser from "react-html-parser";
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";

import Alert from "../../Custom/Alerts";

const useStyles = makeStyles((theme) => ({
  form: {
    "& div": {
      margin: theme.spacing(1),
      marginLeft: 0,
    },
    "& .MuiTextField-root": {
      width: "100%",
      borderRadius: 0,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
    },
  },
  buttons: {
    width: "30%",
    [theme.breakpoints.down("xs")]: {
      width: "60%",
    },
  },
  content: {
    textAlign: "justify",
    marginTop: "3rem",
    fontSize: 20,
    fontFamily: "zilla slab",
    display: "block",
    lineHeight: "1.9rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      width: "95%",
      margin: "0 auto",
    },
  },
}));

const BlogDetails = (props) => {
  const [blog, setBlog] = useState([]);
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [imgLink, setImgLink] = useState();
  const [content, setContent] = useState();
  const [postDate, setDate] = useState(new Date());
  const [validate, setValidate] = useState(false);
  const [render, setRender] = useState(true);

  const [load, setLoad] = useState(true);
  const [notification, setNotification] = useState({
    showNotification: false,
    severity: "",
    msg: "",
  });

  const classes = useStyles();
  const token = localStorage.getItem("auth-token");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogs = () => {
      axios
        .get("/api/blogs/" + props.match.params.id)
        .then((res) => {
          setBlog(res.data);
          setRender(false);
          setAuthor(blog.author);
          setTitle(blog.title);
          setImgLink(blog.imgLink);
          setContent(blog.blogContent);
          setDate(blog.date !== "string" ? new Date(blog.date) : blog.date);
          setLoad(false);
        })
        .catch((err) => console.log(err));
    };
    fetchBlogs();

    window.scrollTo(0, 0);

    //eslint-disable-next-line
  }, [render]);

  const handleSubmit = () => {
    axios
      .put(
        "/api/blogs/" + props.match.params.id,
        {
          author: author,
          title: title,
          imgLink: imgLink,
          blogContent: content,
          date: postDate,
          validated: validate,
        },
        { headers: { "x-auth-token": token } }
      )
      .then(() =>
        setNotification({
          showNotification: true,
          severity: "success",
          msg: "Update Successful",
        })
      )
      .catch(() =>
        setNotification({
          showNotification: true,
          severity: "error",
          msg: "There was an error while updating",
        })
      );
  };

  const handleDelete = (id) => {
    const confirm = prompt("Types YES in the input below");
    if (confirm === "YES") {
      axios
        .delete("/api/blogs/" + props.match.params.id, {
          headers: { "x-auth-token": token },
        })
        .then(() => {
          history.push("/blogs/validate");
        })
        .catch((err) =>
          setNotification({
            showNotification: true,
            severity: "error",
            msg: "There was an error while deleting",
          })
        );
    } else {
      setNotification({
        showNotification: true,
        severity: "error",
        msg: "There was an error while deleting",
      });
    }
  };

  const handleNotification = () => {
    const header = "New Blog By " + author;
    const url = "https://bombayjesuitstoday.com/blogs/content/" + id;
    axios
      .post("/api/subs/send", {
        title: header,
        message: title,
        image: imgLink,
        badge: "https://bombayjesuitstoday.com/images/dove.png",
        url: url,
      })
      .then(() =>
        setNotification({
          showNotification: true,
          severity: "success",
          msg: "Notification sent",
        })
      )
      .catch((err) =>
        setNotification({
          showNotification: true,
          severity: "error",
          msg: "Notification was not sent",
        })
      );
  };

  return (
    <>
      {!load ? (
        <div className="video-post-form">
          <h2> Update Blog Details </h2>

          <form className={classes.form}>
            <div>
              <label htmlFor="author">Author Name :</label>
              <br />
              <TextField
                variant="outlined"
                color="secondary"
                size="small"
                name="author"
                placeholder="Name"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                required
              />
            </div>

            <div>
              <label htmlFor="title">Title of the blog :</label>
              <br />
              <TextField
                variant="outlined"
                color="secondary"
                size="small"
                name="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>

            <div>
              <label htmlFor="post-date">Date of posting :</label>
              <br />
              <TextField
                type="date"
                variant="outlined"
                color="secondary"
                size="small"
                name="post-date"
                value={
                  postDate !== undefined && typeof postDate === "object"
                    ? `${postDate.getFullYear()}-${postDate.getMonth()}-${postDate.getDate()}`
                    : postDate
                }
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                required
              />
            </div>

            <div>
              <label htmlFor="img-link">Link of image :</label>
              <br />
              <TextField
                variant="outlined"
                color="secondary"
                size="small"
                placeholder="Link"
                name="img-link"
                onChange={(e) => setImgLink(e.target.value)}
                value={imgLink}
                required
              />
            </div>

            <div>
              <Editor
                initialValue={content}
                apiKey="8q4z6qq9dp0eudbmmi67fkqj2kwwtcvobndarz5lo08ip9jj"
                init={{
                  height: 400,
                  menubar: false,
                  plugins: ["lists link", "wordcount"],
                  toolbar:
                    "formatselect | bold italic underline link | \
         alignleft aligncenter alignright alignjustify | \
         bullist numlist | undo redo removeformat",
                }}
                defaultValue={blog}
                onEditorChange={(e) => setContent(e)}
              />
            </div>

            <div>
              <FormControlLabel
                style={{ float: "unset" }}
                control={
                  <Switch
                    color="secondary"
                    checked={validate}
                    onChange={() => setValidate(!validate)}
                  />
                }
                label="Validated"
              />
            </div>
            <br />

            <Button
              variant="contained"
              color="primary"
              className={classes.buttons}
              onClick={handleSubmit}
            >
              Update Details
            </Button>
            <br />
            <br />
            <Button
              variant="contained"
              style={{ backgroundColor: "rgb(45, 180, 15)", color: "#fff" }}
              className={classes.buttons}
              onClick={handleNotification}
            >
              Send Notification
            </Button>
            <br />
            <br />
            <Button
              variant="contained"
              style={{ backgroundColor: "rgb(191, 41, 41)", color: "#fff" }}
              className={classes.buttons}
              onClick={handleDelete}
            >
              Delete Blog
            </Button>
          </form>
        </div>
      ) : (
        <div style={{ minHeight: "100vh" }}>
          <CircularProgress />
        </div>
      )}
      <Alert
        open={notification.showNotification}
        setNotification={setNotification}
        severity={notification.severity}
        message={notification.msg}
      />

      <div className="blog-container">
        <p className={classes.content}>{ReactHtmlParser(content)}</p>
      </div>
    </>
  );
};

export default withRouter(BlogDetails);
