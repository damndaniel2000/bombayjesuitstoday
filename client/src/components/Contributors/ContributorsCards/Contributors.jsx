import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Spin, Radio } from "antd";

import "./Contributors.css";

const ContributorsCard = (props) => {
  const [contributors, setContributors] = useState([]);
  const { promiseInProgress } = usePromiseTracker();
  const history = useHistory();

  const radio = "/contributors/" + props.path;

  useEffect(() => {
    getContributors();
  }, []);

  const getContributors = async () => {
    try {
      const res = await trackPromise(
        axios.get("/api/contributors-" + props.path)
      );
      setContributors(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleRadios = (evt) => {
    history.push(evt.target.value);
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
            <div></div>
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

      <p className="contributors-page-title">Meet Our Contributors</p>

      <Radio.Group onChange={handleRadios} defaultValue={radio}>
        <Radio.Button
          className="page-radio-buttons"
          value="/contributors/jesuits"
        >
          Jesuits
        </Radio.Button>
        <Radio.Button
          className="page-radio-buttons"
          value="/contributors/laity"
        >
          Laity
        </Radio.Button>
        <Radio.Button
          className="page-radio-buttons"
          value="/contributors/blogs"
        >
          Blogs
        </Radio.Button>
      </Radio.Group>
      {promiseInProgress && (
        <div className="spinner">
          <Spin size="large" />
        </div>
      )}
      <div className="contributors-card-container">{contributorsList} </div>
    </>
  );
};

export default ContributorsCard;