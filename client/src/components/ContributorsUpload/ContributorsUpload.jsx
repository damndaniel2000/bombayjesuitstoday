import React, { useState } from "react";
import "./ContributorsUpload.css";
import axios from "axios";
import { Form, Input, message } from "antd";

const VideoPost = () => {
  const [state, setState] = useState({
    name: "",
    quote: "",
    basedLocation: "",
  });
  const [imgURL, setURL] = useState("");
  const [fileName, setFileName] = useState("");
  const { name, quote, basedLocation } = state;

  const handleSubmit = () => {
    axios
      .post("/api/contributors", {
        name: name,
        basedLocation: basedLocation,
        imgURL: imgURL,
        quote: quote,
      })
      .then(() => {
        successMessage();
        setURL("");
        setState((name: ""));
      })
      .catch((err) => {
        console.log(err);
        errorMessage();
      });
  };

  const successMessage = () => {
    return message.success("Your response has been recorded. Thank You", 5);
  };

  const errorMessage = () => {
    return message.error(
      "There was a problem in accepting your response. Sorry",
      5
    );
  };

  const openWidget = () => {
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "dij0e4dwn",
          uploadPreset: "nofvgsru",
          sources: ["local"],
          api_key: "597871714829172",
          showAdvancedOptions: false,
          multiple: false,
          defaultSource: "local",
          cropping: true,
          croppingAspectRatio: 0.75,
          showSkipCropButton: false,
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

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  return (
    <div className="video-post-form">
      <h1> Tell Us About You </h1>
      <Form onFinish={handleSubmit} layout="vertical" size="large">
        <Form.Item name="name">
          <label htmlFor="name">Your name :</label>

          <Input
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={name}
            required
          />
        </Form.Item>

        <Form.Item name="basedLocation">
          <label htmlFor="basedLocation">
            Which parish do you currently belong to?
          </label>
          <Input
            placeholder="Church Name"
            name="basedLocation"
            value={basedLocation}
            onChange={handleChange}
            required
          />
          <p className="form-extra-image">
            If you don't belong to a particular church, just write down the
            location you currently work in.
          </p>
        </Form.Item>

        <div className="upload-input-div" onClick={() => openWidget()}>
          <span className="upload-input-button">
            <i className="fa fa-upload" />
            &nbsp; Select Image
          </span>
          <Input
            className="upload-input-filename"
            placeholder="Filename"
            value={fileName}
            disabled
          />
        </div>
        <p className="form-extra-image">
          Select a photo of yourself with your best smile !
        </p>
        <br />

        <Form.Item name="quote">
          <label htmlFor="quote">Any quote or scripture you live by :</label>
          <Input.TextArea
            value={quote}
            name="quote"
            placeholder="Message..."
            rows={3}
            onChange={handleChange}
            required
          />
        </Form.Item>
        <p className="form-extra">
          You can check our Contributors page to get an idea about what to
          write.
        </p>

        <button className="video-post-form-button" type="primary">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default VideoPost;
