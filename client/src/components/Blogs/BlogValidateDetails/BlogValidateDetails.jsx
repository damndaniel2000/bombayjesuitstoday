/*eslint-disable*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { Form, Input, Switch, message } from "antd";
import { Editor } from "@tinymce/tinymce-react";

const BlogDetails = (props) => {
  const [blog, setBlog] = useState([]);
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [imgLink, setImgLink] = useState();
  const [content, setContent] = useState();
  const [postDate, setDate] = useState();
  const [validate, setValidate] = useState(false);
  const [render, setRender] = useState(true);

  const token = localStorage.getItem("auth-token");
  const history = useHistory();

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
          setDate(blog.date);
        })
        .catch((err) => console.log(err));
    };
    fetchBlogs();

    window.scrollTo(0, 0);
  }, [render]);

  const validateChange = () => {
    setValidate(true);
  };

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
      .then(() => successMessage())
      .catch(() => errorMessage());
  };

  const successMessage = () => {
    return message.success("Updated Successfully", 5);
  };

  const errorMessage = () => {
    return message.error("There was a problem in updating", 5);
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("auth-token");
    const confirm = prompt("Types YES in the input below");
    if (confirm === "YES") {
      axios
        .delete("/api/blogs/" + props.match.params.id, {
          headers: { "x-auth-token": token },
        })
        .then(() => {
          history.push("/blogs/validate");
          successMessage();
        })
        .catch((err) => errorMessage());
    } else {
      errorMessage();
    }
  };

  return (
    <div className="video-post-form">
      <h1> Update Blog Details </h1>
      <Form onFinish={handleSubmit} layout="vertical" size="large">
        <Form.Item name="author">
          <label htmlFor="author">Author Name :</label>

          <Input
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Name"
            name="author"
            value={author}
          />
        </Form.Item>

        <Form.Item name="title">
          <label htmlFor="title">Title of the Blog : </label>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            name="title"
            value={title}
          />
        </Form.Item>

        <Form.Item name="postDate">
          <label htmlFor="postDate">Date of Posting : </label>
          <Input
            type="date"
            name="postDate"
            value={postDate}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Item>

        <Form.Item name="link">
          <label htmlFor="link">Link of the Image : </label>
          <Input
            onChange={(e) => setImgLink(e.target.value)}
            placeholder="Img Link"
            name="link"
            value={imgLink}
          />
        </Form.Item>

        <div>
          <Editor
            initialValue={content}
            apiKey="8q4z6qq9dp0eudbmmi67fkqj2kwwtcvobndarz5lo08ip9jj"
            init={{
              height: 500,
              menubar: false,
              plugins: ["lists link", "wordcount"],
              toolbar:
                "formatselect | bold italic underline link | \
					 alignleft aligncenter alignright alignjustify | \
					 bullist numlist | undo redo",
            }}
            defaultValue={blog}
            onEditorChange={(e) => setContent(e)}
          />
        </div>
        <br />

        <Form.Item>
          <Switch
            onChange={validateChange}
            checkedChildren={<i className="fa fa-check" />}
            unCheckedChildren={<i className="fa fa-close" />}
          />
        </Form.Item>
        <button className="video-post-form-button">Update Details</button>
        <br />
      </Form>
      <button
        style={{ backgroundColor: "maroon" }}
        className="video-post-form-button"
        onClick={handleDelete}
      >
        Delete Entry
      </button>
    </div>
  );
};

export default withRouter(BlogDetails);
