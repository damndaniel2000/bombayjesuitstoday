import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { TextField, Button, makeStyles } from "@material-ui/core";

import "./BlogUpload.css";
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
}));

const BlogUpload = () => {
  const [blog, setBlog] = useState();
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();

  const [notification, setNotification] = useState({
    showNotification: false,
    severity: "",
    msg: "",
  });

  const classes = useStyles();

  const handleSubmit = () => {
    axios
      .post("/api/blogs", {
        author: author,
        title: title,
        blogContent: blog,
      })
      .then(() => {
        setBlog("");
        setAuthor("");
        setTitle("");
        setNotification({
          showNotification: true,
          severity: "success",
          msg: "Posted successfully",
        });
      })
      .catch(() =>
        setNotification({
          showNotification: true,
          severity: "error",
          msg: "There was an error while posting the blog",
        })
      );
  };

  return (
    <>
      <div className="video-post-form">
        <h2> Upload Blog </h2>

        <form className={classes.form}>
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
            <label htmlFor="author">Your Name :</label>
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
            <Editor
              initialValue={blog}
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
              onEditorChange={(e) => setBlog(e)}
            />
          </div>
          <br />

          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            onClick={handleSubmit}
          >
            Post Blog
          </Button>
        </form>
        <Alert
          open={notification.showNotification}
          setNotification={setNotification}
          severity={notification.severity}
          message={notification.msg}
        />
      </div>
    </>
  );
};

export default BlogUpload;
