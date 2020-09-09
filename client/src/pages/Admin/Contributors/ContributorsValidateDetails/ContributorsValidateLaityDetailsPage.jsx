import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import ContributorsValidateLaityDetails from "../../../../components/Contributors/ContributorsValidate/ContributorsValidateDetails";
import NotFoundPage from "../../../NotFoundPage";

const ContributorsValidate = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <ContributorsValidateLaityDetails path="laity" type="videos" />
        </>
      )}
    </div>
  );
};

export default ContributorsValidate;
