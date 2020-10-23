import React, { useState, useEffect } from "react";
import axios from "axios";

const GVideo = () => {};

const [gData, setGdata] = useState({});
const channelID = "UCEypxIaduGt4NU3-h9ZgRFA";
const reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";

useEffect(() => {
  axios;
});
function getData() {
  return axios
    .get(
      "https://api.rss2json.com/v1/api.json?rss_url=" +
        encodeURIComponent(reqURL) +
        channelID,
      {
        "Content-Type": "application/json",
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

const processUrl = async (videoId) => {
  const ytApiKey = "AIzaSyDBX0aq_cztB34O0uJvfFJvn6q6Howyexw";
  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${ytApiKey}`
    );
    const data = res.data.items[0].snippet;
    window.gData = {
      title: data.title,
      caption: data.description,
      hello: "dns",
    };
  } catch (err) {
    console.log(err);
  }
};

const getId = (url) => {
  const query = {};
  const pairs = (url[0] === "?" ? url.substr(1) : url).split("&");
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
};

getData();

export const demo = gData;
