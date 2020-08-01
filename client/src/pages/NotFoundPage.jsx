import React from "react";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();

  return (
    <div style={{ minHeight: "150vh" }}>
      <p className="not-found-title"> 404 - Page Not Found </p>
      <div className="not-found-text">
        <p>Please check and verify the link you have entered</p>
        <button onClick={() => history.push("/")} className="not-found-button">
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default Error;
