import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import LaityValidateDetails from "../../../../components/Videos/VideoValidation/ValidateDetails/ValidateDetails";
import NotFoundPage from "../../../NotFoundPage";

const ValidateVideoDetails = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <LaityValidateDetails path="laity" />
        </>
      )}
    </div>
  );
};

export default ValidateVideoDetails;
