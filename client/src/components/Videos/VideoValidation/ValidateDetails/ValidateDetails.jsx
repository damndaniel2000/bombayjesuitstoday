import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { Form, Input, Switch, message } from "antd";

const BlogDetails = (props) => {
  const [video, setVideo] = useState([]);
  const [uploader, setUploader] = useState();
  const [title, setTitle] = useState();
  const [caption, setCaption] = useState();
  const [embedLink, setEmbed] = useState();
  const [videoURL, setURL] = useState();
  const [postDate, setDate] = useState();
  const [render, setRender] = useState(true);

  const token = localStorage.getItem("auth-token");
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`/api/videos-${props.path}/` + props.match.params.id)
      .then((res) => {
        setVideo(res.data);
        setRender(false);
      })
      .catch((err) => console.log(err));

    setUploader(video.uploader);
    setTitle(video.title);
    setCaption(video.caption);
    setEmbed(video.embedLink);
    setURL(video.videoURL);
    setDate(video.date);

    window.scrollTo(0, 0);
  }, [render]);

  const handleSubmit = () => {
    axios
      .put(
        `/api/videos-${props.path}/` + props.match.params.id,
        {
          uploader: uploader,
          title: title,
          caption: caption,
          embedLink: embedLink,
          videoURL: videoURL,
          date: postDate,
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
        .delete(`/api/videos-${props.path}/` + props.match.params.id, {
          headers: { "x-auth-token": token },
        })
        .then(() => {
          history.push("/");
          successMessage();
        })
        .catch((err) => errorMessage());
    } else {
      errorMessage();
    }
  };

  return (
    <div className="video-post-form">
      <h1> Update Video Details </h1>
      <Form onFinish={handleSubmit} layout="vertical" size="large">
        <Form.Item name="uploader">
          <label htmlFor="uploader">Uploader Name :</label>

          <Input
            onChange={(e) => setUploader(e.target.value)}
            placeholder="Name"
            name="uploader"
            value={uploader}
          />
        </Form.Item>

        <Form.Item name="title">
          <label htmlFor="title">Title of the Video : </label>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            name="title"
            value={title}
          />
        </Form.Item>

        <Form.Item name="title">
          <label htmlFor="title">Date of Posting : </label>
          <Input
            type="date"
            placeholder="Title"
            name="title"
            value={postDate}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Item>

        <Form.Item name="caption">
          <label htmlFor="caption">Caption :</label>
          <Input.TextArea
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
            name="caption"
            placeholder="Caption..."
            rows={3}
            required
          />
        </Form.Item>

        <Form.Item name="embed">
          <label htmlFor="embed">Embed Link: </label>
          <Input
            onChange={(e) => setEmbed(e.target.value)}
            placeholder="Embed Link"
            name="embed"
            value={embedLink}
          />
        </Form.Item>
        <Form.Item name="url">
          <label htmlFor="url">Video URL: </label>
          <Input
            onChange={(e) => setURL(e.target.value)}
            placeholder="URL"
            name="url"
            value={videoURL}
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
