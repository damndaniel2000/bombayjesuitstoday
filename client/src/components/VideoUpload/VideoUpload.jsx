import React, { useState } from "react";
import "./VideoUpload.css";

import axios from "axios";
import { Form, Input, message } from "antd";

const VideoPost = () => {
  const [state, setState] = useState({
    uploader: "",
    caption: "",
  });
  const [videoURL, setURL] = useState("");
  const { uploader, caption } = state;

  const openWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: "dij0e4dwn",
        upload_preset: "nofvgsru",
        folder: "video_uploads",
      },
      (error, result) => {
        if (!error) {
          setURL(result[0].secure_url);
        } else {
          return null;
        }
      }
    );
  };

  const handleSubmit = () => {
    axios
      .post("/api/videos-upload", {
        uploader: uploader,
        caption: caption,
        videoURL: videoURL,
      })
      .then(() => {
        successMessage();
        setURL("");
      })
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

        <div className="upload-input-div">
          <button className="upload-input-button" onClick={() => openWidget()}>
            Select Video
          </button>
          <Input
            className="upload-input-filename"
            placeholder="Filename"
            value={videoURL}
          />
        </div>
        <br />

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

        <button className="video-post-form-button" type="primary">
          Post Video
        </button>
      </Form>
      <br />
      <h3>
        After uploading your videos, it may take a while for them to appear on
        the website.
      </h3>
    </div>
  );
};

export default VideoPost;
