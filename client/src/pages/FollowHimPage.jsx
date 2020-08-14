import React, { useEffect } from "react";

import FollowHim from "../components/FollowHim/MainContent";

const FollowHimPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ minHeight: "150vh" }}>
      <FollowHim />
    </div>
  );
};

export default FollowHimPage;
