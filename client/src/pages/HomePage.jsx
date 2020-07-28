import React from "react";

import Home from "../components/Home/Home";
import HomeCards from "../components/HomeCards/HomeCards";

const HomePage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Home />
      <HomeCards />
    </div>
  );
};

export default HomePage;
