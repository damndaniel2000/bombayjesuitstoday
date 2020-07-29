import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VideoUpload.css";

import axios from "axios";
import { Form, Input, message } from "antd";

const VideoPost = () => {
  const [state, setState] = useState({
    uploader: "",
    caption: "",
  });
  const [videoURL, setURL] = useState("");
  const [fileName, setFileName] = useState("");
  const { uploader, caption } = state;

  const openWidget = () => {
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "dij0e4dwn",
          uploadPreset: "nofvgsru",
          sources: ["local"],
          folder: "videoUploads",
          api_key: "597871714829172",
          showAdvancedOptions: false,
          multiple: false,
          defaultSource: "local",
          styles: {
            palette: {
              window: "#10173a",
              sourceBg: "#20304b",
              windowBorder: "#7171D0",
              tabIcon: "#79F7FF",
              inactiveTabIcon: "#8E9FBF",
              menuIcons: "#CCE8FF",
              link: "#72F1FF",
              action: "#5333FF",
              inProgress: "#00ffcc",
              complete: "#33ff00",
              error: "#cc3333",
              textDark: "#000000",
              textLight: "#ffffff",
            },
            fonts: {
              default: null,
              "'Poppins', sans-serif": {
                url: "https://fonts.googleapis.com/css?family=Poppins",
                active: true,
              },
            },
          },
        },
        (error, result) => {
          if (!error && result.event === "success") {
            setURL(result.info.secure_url);
            setFileName(result.info.original_filename);
          } else {
            return null;
          }
        }
      )
      .open();
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
    return message.success("Video uploaded successfully. Thank You", 5);
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
    <>
      <div className="video-post-form">
        <h1> Upload Your Video </h1>
        <Form onFinish={handleSubmit} layout="vertical" size="large">
          <Form.Item name="uploader">
            <label htmlFor="uploader">Your name :</label>

            <Input
              placeholder="Name"
              name="uploader"
              onChange={handleChange}
              value={uploader}
              required
            />
          </Form.Item>

          <div className="upload-input-div" onClick={() => openWidget()}>
            <span className="upload-input-button">
              <i className="fa fa-upload" />
              &nbsp; Select Video
            </span>
            <Input
              className="upload-input-filename"
              placeholder="Filename"
              value={fileName}
            />
          </div>
          <br />

          <Form.Item name="caption">
            <label htmlFor="caption">Any message with the video?</label>

            <Input.TextArea
              value={caption}
              name="caption"
              placeholder="Caption..."
              rows={3}
              onChange={handleChange}
            />
          </Form.Item>

          <button className="video-post-form-button" type="primary">
            Upload
          </button>
        </Form>
        <br />
        <h3>
          After uploading your videos, it may take a while for them to appear on
          the website.
        </h3>
      </div>
      <h3>
        {" "}
        First time uploading a video?{" "}
        <Link
          to="/contributors/upload-details"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Click Here
        </Link>
      </h3>
      <h3>
        Video not uploading?{" "}
        <a
          href="https://forms.gle/CmouRWKMULh5WQpM8"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Click Here
        </a>
      </h3>
    </>
  );
};

export default VideoPost;
