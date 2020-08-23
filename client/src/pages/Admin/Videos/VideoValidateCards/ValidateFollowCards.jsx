import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import FollowValidateCards from "../../../../components/Videos/VideoValidation/ValidationCards/ValidationCards";
import NotFoundPage from "../../../NotFoundPage";

const VideoValidateCards = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <FollowValidateCards path="follow" />
        </>
      )}
    </div>
  );
};

export default VideoValidateCards;
