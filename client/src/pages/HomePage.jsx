import React, { useEffect } from "react";

import Home from "../components/Home/Home";
import HomeCards from "../components/HomeCards/HomeCards";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ minHeight: "150vh" }}>
      <Home />
      <HomeCards />
    </div>
  );
};

export default HomePage;
