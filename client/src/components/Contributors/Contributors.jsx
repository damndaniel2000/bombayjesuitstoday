import React, { useState, useEffect } from "react";
import axios from "axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Spin } from "antd";

import "./Contributors.css";

const ContributorsCard = () => {
  const [contributors, setContributors] = useState([]);
  const [notFound, setNotFound] = useState(true);
  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    getContributors();
  }, []);

  const getContributors = async () => {
    try {
      const res = await trackPromise(axios.get("/api/contributors"));
      setContributors(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const contributorsList = contributors.map((contri) => {
    if (contri.validated) {
      return (
        <div className="contributors-card">
          <div className="contributors-card-photo">
            <img
              className="contributors-avatar"
              src={contri.imgURL}
              alt="Profile Pic"
            />
          </div>
          <div className="contributors-card-details">
            <div>
              <p className="contributors-card-name"> {contri.name} </p>
              <p className="contributors-card-location">
                {contri.basedLocation}
              </p>
              <blockquote>{contri.quote}</blockquote>
            </div>
            <div>
              <a
                href={contri.playlistLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="contributors-card-link">Videos</button>
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <>
      <br />
      <br />
      <span className="page-title">Meet Our Contributors</span>
      <br />
      <br />
      {promiseInProgress && <Spin size="large" />}
      <div className="contributors-card-container">{contributorsList} </div>
    </>
  );
};

export default ContributorsCard;
