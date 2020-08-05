import React, { useEffect } from "react";

import HomeHero from "../components/Home/HomeHero/Home";
import HomeCards from "../components/Home/HomeCards/HomeCards";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ minHeight: "150vh" }}>
      <HomeHero />
      <HomeCards />
    </div>
  );
};

export default HomePage;
