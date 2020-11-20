import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import GospelValidateCards from "../../../../components/Videos/VideoValidation/ValidationCards/ValidationCards";
import NotFoundPage from "../../../NotFoundPage";

const VideoValidateCards = () => {
  const { userData } = useContext(UserContext);

  return !userData.user ? (
    <NotFoundPage />
  ) : (
    <GospelValidateCards path="gospel" />
  );
};

export default VideoValidateCards;
