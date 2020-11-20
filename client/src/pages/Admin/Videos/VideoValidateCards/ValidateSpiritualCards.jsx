import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import SpiritualValidateCards from "../../../../components/Videos/VideoValidation/ValidationCards/ValidationCards";
import NotFoundPage from "../../../NotFoundPage";

const VideoValidateCards = () => {
  const { userData } = useContext(UserContext);

  return !userData.user ? (
    <NotFoundPage />
  ) : (
    <SpiritualValidateCards path="spiritual" />
  );
};

export default VideoValidateCards;
