import React, { useState, useEffect } from "react";
import { Card, message } from "antd";
import axios from "axios";
import "./VideoUploadDelete.css";

const VideoDelete = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    axios
      .get("/api/videos-upload")
      .then((res) => setVideos(res.data))
      .catch((err) => console.log(err));
  };

  const deleteVideo = (id) => {
    const confirm = prompt("Types YES in the input below");
    if (confirm === "YES") {
      axios
        .delete("/api/videos-upload/" + id)
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
    message.error("The video was not deleted", 5);
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
          <div className="video-delete-card">
            <div className="video-card-delete-body">
              <span className="video-card-title">{video.uploader}</span>
              <p> {uploadTime} </p>
              <a
                href={video.videoURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {video.videoURL}
              </a>
            </div>
            <br />
            <br />
            <button
              className="video-delete-button"
              onClick={() => deleteVideo(video._id)}
            >
              Delete Video
            </button>
          </div>
        );
      })
    : null;

  return <div className="video-delete-div"> {videoData} </div>;
};

export default VideoDelete;
