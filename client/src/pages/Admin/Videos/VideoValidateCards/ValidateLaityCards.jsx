import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import LaityValidateCards from "../../../../components/Videos/VideoValidation/ValidationCards/ValidationCards";
import NotFoundPage from "../../../NotFoundPage";

const VideoValidateCards = () => {
  const { userData } = useContext(UserContext);

  return !userData.user ? (
    <NotFoundPage />
  ) : (
    <div style={{ minHeight: "100vh" }}>
      <LaityValidateCards path="laity" />
    </div>
  );
};

export default VideoValidateCards;
