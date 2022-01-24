import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import GospelValidateDetails from "../../../../components/Videos/VideoValidation/ValidateDetails/ValidateDetails";
import NotFoundPage from "../../../NotFoundPage";

const ValidateVideoDetails = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "100vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <GospelValidateDetails path="gospel" />
        </>
      )}
    </div>
  );
};

export default ValidateVideoDetails;
