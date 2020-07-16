import React, { useState } from "react";
import "./VideoPost.css";
import axios from "axios";
import { Form, Input, message } from "antd";

const VideoPost = () => {
  const [state, setState] = useState({
    uploader: "",
    caption: "",
    embedLink: "",
    videoURL: "",
  });
  const { uploader, caption, embedLink, videoURL } = state;

  const handleSubmit = () => {
    axios
      .post("/api/videos", {
        uploader: uploader,
        caption: caption,
        embedLink: embedLink,
        videoURL: videoURL,
      })
      .then(() => successMessage())
      .catch((err) => {
        console.log(err);
        errorMessage();
      });
  };

  const successMessage = () => {
    return message.success("Video posted successfully. Thank You", 5);
  };

  const errorMessage = () => {
    return message.error(
      "There was a problem in uploading the video. Sorry",
      5
    );
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  return (
    <div className="video-post-form">
      <h1> Post Your Video </h1>
      <Form onFinish={handleSubmit} layout="vertical" size="large">
        <Form.Item label="Uploader's Name" name="uploader">
          <Input
            placeholder="Name"
            name="uploader"
            onChange={handleChange}
            value={uploader}
            required
          />
        </Form.Item>

        <Form.Item label="Caption" name="caption">
          <Input.TextArea
            value={caption}
            name="caption"
            placeholder="Caption..."
            rows={3}
            onChange={handleChange}
            required
          />
        </Form.Item>

        <Form.Item
          label="Embed Link"
          name="embedLink"
          extra="Go to your video -> Share -> Embed -> Copy the link inside src=' ' and paste it here"
        >
          <Input
            placeholder="Embed Link"
            name="embedLink"
            value={embedLink}
            onChange={handleChange}
            required
          />
        </Form.Item>

        <Form.Item
          label="Video URL"
          name="videoURL"
          extra="This is the link to the page your video is on. This appears in the searchbar on top"
        >
          <Input
            name="videoURL"
            placeholder="Video URL"
            value={videoURL}
            onChange={handleChange}
            required
          />
        </Form.Item>

        <button className="video-post-form-button" type="primary">
          Post Video
        </button>
      </Form>
    </div>
  );
};

export default VideoPost;
