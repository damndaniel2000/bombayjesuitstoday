import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import SpiritualValidateCards from "../../../../components/Videos/VideoValidation/ValidationCards/ValidationCards";
import NotFoundPage from "../../../NotFoundPage";

const VideoValidateCards = () => {
  const { userData } = useContext(UserContext);

  return !userData.user ? (
    <NotFoundPage />
  ) : (
    <div style={{ minHeight: "100vh" }}>
      <SpiritualValidateCards path="spiritual" />
    </div>
  );
};

export default VideoValidateCards;
