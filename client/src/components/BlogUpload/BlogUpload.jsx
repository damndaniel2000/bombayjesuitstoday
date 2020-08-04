import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";
import { Form, Input, message } from "antd";

import "./BlogUpload.css";

const BlogUpload = () => {
  const [blog, setBlog] = useState();
  const [name, setName] = useState();
  const [title, setTitle] = useState();

  return (
    <>
      {" "}
      <div className="blog-editor-container">
        <h1> Upload Your Blog </h1>
        <Form layout="vertical" size="large">
          <Form.Item name="name">
            <label htmlFor="name">Your Name :</label>

            <Input
              placeholder="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </Form.Item>
          <Form.Item name="title">
            <label htmlFor="title">Title of your blog :</label>

            <Input
              placeholder="Title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
            <p className="form-extra">Please keep the title short.</p>
          </Form.Item>
          <div>
            <Editor
              apiKey="8q4z6qq9dp0eudbmmi67fkqj2kwwtcvobndarz5lo08ip9jj"
              initialValue="Write your blog here. No need to write the title again here.
							 If you are using a mobile device, you can scroll the text formatting options above to see more of them."
              init={{
                height: 500,
                menubar: false,
                plugins: ["lists link", "wordcount"],
                toolbar:
                  "formatselect | bold italic underline link | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist | undo redo",
              }}
              value={blog}
              onEditorChange={(e) => setBlog(e)}
            />
          </div>
          <br />

          <Form.Item style={{ textAlign: "left" }}>
            <p>
              If you have a photo to attach, mail it to us on the email ID
              below. In the subject, write the title of your blog. <br />
              You can only attach only one photo. If you don't have a photo, we
              will attach one for you. <br />
              You can check the demo below to see how your blog will look
            </p>
            <p>
              <i className="fa fa-envelope" />
              <a
                style={{ color: "blue" }}
                href="mailto:sjspiritual2020@gmail.com"
              >
                &nbsp;&nbsp;sjspiritual2020@gmail.com
              </a>
            </p>
          </Form.Item>

          <button className="video-post-form-button" type="primary">
            Upload Blog
          </button>
        </Form>
      </div>
      <p>
        <Link
          to="/blogs/example"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          View an example format of the Blog{" "}
        </Link>
      </p>
    </>
  );
};

export default BlogUpload;
