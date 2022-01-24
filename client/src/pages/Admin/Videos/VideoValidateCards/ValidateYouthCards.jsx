import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import YouthValidateCards from "../../../../components/Videos/VideoValidation/ValidationCards/ValidationCards";
import NotFoundPage from "../../../NotFoundPage";

const VideoValidateCards = () => {
  const { userData } = useContext(UserContext);

  return !userData.user ? (
    <NotFoundPage />
  ) : (
    <div style={{ minHeight: "100vh" }}>
      <YouthValidateCards path="youth" />
    </div>
  );
};

export default VideoValidateCards;
