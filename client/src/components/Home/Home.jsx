import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="opacity-container"></div>
      </div>
      <div className="provincial-message-container">
        <blockquote className="provincial-message">
          <i>
            If we are to overcome this pandemic, we shall have to relearn our
            ability to collaborate across frontiers to network with all groups
            working towards bettering human society. <br />
            <br />
            <b>
              - Fr. Arun De Souza SJ <br />
              (Provincial)
            </b>
          </i>
        </blockquote>
      </div>
    </>
  );
};

export default Home;
