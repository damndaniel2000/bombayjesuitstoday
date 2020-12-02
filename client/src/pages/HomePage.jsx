import React, { useEffect } from "react";

import HomeHero from "../components/Home/HomeHero/Home";

const HomePage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ minHeight: "150vh" }}>
      <HomeHero />
    </div>
  );
};

export default HomePage;
