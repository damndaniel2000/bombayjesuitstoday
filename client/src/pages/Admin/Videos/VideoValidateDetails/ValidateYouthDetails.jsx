import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import YouthValidateDetails from "../../../../components/Videos/VideoValidation/ValidateDetails/ValidateDetails";
import NotFoundPage from "../../../NotFoundPage";

const ValidateVideoDetails = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <YouthValidateDetails path="youth" />
        </>
      )}
    </div>
  );
};

export default ValidateVideoDetails;
