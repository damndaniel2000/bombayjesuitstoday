import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { Form, Input, Switch, message } from "antd";

const Details = (props) => {
  const [contri, setContri] = useState([]);
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [imgLink, setImgLink] = useState();
  const [videoURL, setVideoURL] = useState();
  const [quote, setQuote] = useState();
  const [validate, setValidate] = useState(false);
  const [render, setRender] = useState(true);

  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/contributors-jesuits/" + props.match.params.id)
      .then((res) => {
        setContri(res.data);
        setRender(false);
      })
      .catch((err) => console.log(err));

    setName(contri.name);
    setLocation(contri.basedLocation);
    setImgLink(contri.imgURL);
    setQuote(contri.quote);
    setVideoURL(contri.videosURL);
  }, [render]);

  const validateChange = () => {
    setValidate(true);
  };

  const handleSubmit = () => {
    axios
      .put("/api/contributors-jesuits/" + props.match.params.id, {
        name: name,
        basedLocation: location,
        imgURL: imgLink,
        quote: quote,
        validated: validate,
      })
      .then(() => successMessage())
      .catch(() => errorMessage());
  };

  const successMessage = () => {
    return message.success("Updated Successfully", 5);
  };

  const errorMessage = () => {
    return message.error("There was a problem in updating", 5);
  };

  const openWidget = () => {
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "dij0e4dwn",
          uploadPreset: "nofvgsru",
          sources: ["local"],
          folder: `contributors`,
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
            setImgLink(result.info.secure_url);
          } else {
            return null;
          }
        }
      )
      .open();
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("auth-token");
    const confirm = prompt("Types YES in the input below");
    if (confirm === "YES") {
      axios
        .delete("/api/contributors-jesuits/" + props.match.params.id, {
          headers: { "x-auth-token": token },
        })
        .then(() => {
          history.push("/contributors/validate");
          successMessage();
        })
        .catch((err) => errorMessage());
    } else {
      errorMessage();
    }
  };

  return (
    <div className="video-post-form">
      <h1> Update Contributor Details </h1>
      <Form onFinish={handleSubmit} layout="vertical" size="large">
        <Form.Item name="name">
          <label htmlFor="name">Contributor Name :</label>

          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            name="name"
            value={name}
            required
          />
        </Form.Item>

        <Form.Item name="location">
          <label htmlFor="location">Based Location : </label>
          <Input
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            name="location"
            value={location}
            required
          />
        </Form.Item>

        <div className="upload-input-div">
          <span className="upload-input-button" onClick={() => openWidget()}>
            <i className="fa fa-upload" />
            &nbsp; Update Image
          </span>
          <Input
            className="upload-input-filename"
            placeholder="Filename"
            onChange={(e) => setImgLink(e.target.value)}
            value={imgLink}
          />
        </div>
        <br />

        <Form.Item name="quote">
          <label htmlFor="quote">Quote :</label>
          <Input.TextArea
            onChange={(e) => setQuote(e.target.value)}
            value={quote}
            name="quote"
            placeholder="Caption..."
            rows={3}
            required
          />
        </Form.Item>

        <Form.Item name="videoURL">
          <label htmlFor="videoURL">Youtube Link: </label>
          <Input
            onChange={(e) => setVideoURL(e.target.value)}
            placeholder="Link"
            name="videoURL"
            value={videoURL}
            required
          />
        </Form.Item>

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

export default withRouter(Details);
