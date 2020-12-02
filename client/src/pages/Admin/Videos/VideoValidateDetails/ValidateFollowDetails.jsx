import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import FollowValidateDetails from "../../../../components/Videos/VideoValidation/ValidateDetails/ValidateDetails";
import NotFoundPage from "../../../NotFoundPage";

const ValidateVideoDetails = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "100vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <FollowValidateDetails path="follow" />
        </>
      )}
    </div>
  );
};

export default ValidateVideoDetails;
