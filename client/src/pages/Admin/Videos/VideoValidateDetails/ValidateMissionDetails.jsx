import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import MissionValidateDetails from "../../../../components/Videos/VideoValidation/ValidateDetails/ValidateDetails";
import NotFoundPage from "../../../NotFoundPage";

const ValidateVideoDetails = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "100vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <MissionValidateDetails path="mission" />
        </>
      )}
    </div>
  );
};

export default ValidateVideoDetails;
