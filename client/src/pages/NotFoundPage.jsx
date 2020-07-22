import React, { useEffect } from "react";

const Error = () => {
  return (
    <>
      <p className="not-found-title"> 404 - Page Not Found </p>
      <div className="not-found-text">
        <p>
          The link you have entered might be wrong or this page might have been
          deleted
        </p>
        <button className="not-found-button">Go to Home Page</button>
      </div>
    </>
  );
};

export default Error;
