import React, { useEffect } from "react";

import HomeHero from "../components/Home/HomeHero/Home";
import HomeCards from "../components/Home/HomeCards/HomeCards";
import HomeCounter from "../components/Home/HomeCounter/HomeCounter";
import HomeFollow from "../components/Home/HomeFollow/HomeFollow";
import HomeBlogs from "../components/Home/HomeBlogs/HomeBlogs";

const HomePage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ minHeight: "150vh" }}>
      <HomeHero />
      <HomeCards />
      <HomeFollow />
      <HomeBlogs />
      <HomeCounter count={props.count} />
    </div>
  );
};

export default HomePage;
