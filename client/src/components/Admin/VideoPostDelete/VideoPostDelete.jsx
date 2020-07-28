import React, { useState, useEffect } from "react";
import { Card, message } from "antd";
import axios from "axios";
import "./VideoPostDelete.css";

const VideoDelete = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    axios
      .get("/api/videos-post")
      .then((res) => setVideos(res.data))
      .catch((err) => console.log(err));
  };

  const deleteVideo = (id) => {
    const token = localStorage.getItem("auth-token");
    const confirm = prompt("Types YES in the input below");
    if (confirm === "YES") {
      axios
        .delete("/api/videos-post/" + id, {
          headers: { "x-auth-token": token },
        })
        .then(() => {
          getVideos();
          successMessage();
        })
        .catch((err) => errorMessage());
    } else {
      errorMessage();
    }
  };

  const successMessage = () => {
    message.success("The video has been removed", 5);
  };

  const errorMessage = () => {
    message.error("The video was not removed", 5);
  };

  const videoData = videos.length
    ? videos.map((video) => {
        const timestamp = video._id.toString().substring(0, 8);
        const hours = new Date(
          parseInt(timestamp, 16) * 1000
        ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
        const day = new Date(parseInt(timestamp, 16) * 1000)
          .getDate()
          .toString();
        const monthOG = new Date(
          parseInt(timestamp, 16) * 1000
        ).toLocaleString("default", { month: "long" });
        const uploadTime = `${day} ${monthOG} at ${hours}`;

        return (
          <Card
            className="video-delete-card"
            title={video.uploader}
            bordered={false}
          >
            <p> {uploadTime} </p>
            <p>{video.caption} </p>
            <button
              className="video-delete-button"
              onClick={() => deleteVideo(video._id)}
            >
              Delete Video
            </button>
          </Card>
        );
      })
    : null;

  return <div className="video-delete-div"> {videoData} </div>;
};

export default VideoDelete;
