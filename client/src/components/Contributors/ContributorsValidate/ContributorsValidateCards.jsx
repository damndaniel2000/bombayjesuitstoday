import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Spin } from "antd";

const ContributorsCard = (props) => {
  const [contributors, setContributors] = useState([]);
  const { promiseInProgress } = usePromiseTracker();
  const history = useHistory();

  useEffect(() => {
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
    getContributors();
  }, [props.path]);

  const contributorsList = contributors.map((contri) => {
    return (
      <div className="contributors-card" key={contri._id}>
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
            <p className="contributors-card-location">{contri.basedLocation}</p>
            <blockquote>{contri.quote}</blockquote>
          </div>
          <div>
            <button
              onClick={() =>
                history.push(
                  `/contributors/validate/${props.path}/${contri._id}`
                )
              }
              className="contributors-card-link"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <br />

      {promiseInProgress && <Spin size="large" />}
      <div className="contributors-card-container">{contributorsList} </div>
    </>
  );
};

export default ContributorsCard;
