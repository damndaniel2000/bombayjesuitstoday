import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Avatar } from "antd";

import "./Contributors.css";

const ContributorsCard = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    getContributors();
  }, []);

  const getContributors = () => {
    axios
      .get("/api/contributors")
      .then((res) => {
        setContributors(res.data);
      })
      .catch((err) => console.log(err));
  };

  const contributorsList = contributors.map((contri) => (
    <div className="contributors-card">
      <div className="contributors-card-photo">
        <img className="contributors-avatar" src={contri.imgURL} />
      </div>
      <div className="contributors-card-details">
        <div>
          <p className="contributors-card-name"> {contri.name} </p>
          <p className="contributors-card-location"> {contri.basedLocation} </p>
          <blockquote>{contri.quote}</blockquote>
        </div>
        <div>
          <a
            href="https://medium.muz.li/50-user-profile-page-design-inspiration-5c45aeeda400"
            target="_blank"
          >
            <button className="contributors-card-link">Videos</button>
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <br />
      <br />
      <span className="page-title"> Meet Our Contributors</span>
      <div className="contributors-card-container">{contributorsList} </div>
    </>
  );
};

export default ContributorsCard;
