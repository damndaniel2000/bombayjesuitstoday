import React, { useEffect } from "react";

import HomeHero from "../components/Home/HomeHero/Home";
import HomeBlogs from "../components/Home/HomeBlogs/HomeBlogs";

const HomePage = (props) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  return (
    <>
      <HomeHero />
      <HomeBlogs />
    </>
  );
};

export default HomePage;
