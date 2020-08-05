import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

import ContributorsJesuitValidate from "../../../components/Contributors/ContributorsValidateCards/ContributorsValidateJesuitCards";
import ContributorsLaityValidate from "../../../components/Contributors/ContributorsValidateCards/ContributorsValidateLaityCards";
import NotFoundPage from "../../NotFoundPage";

const ContributorsValidate = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <ContributorsJesuitValidate />
          <ContributorsLaityValidate />
        </>
      )}
    </div>
  );
};

export default ContributorsValidate;
