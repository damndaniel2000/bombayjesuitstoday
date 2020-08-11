import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

import ContributorsValidateJesuitsDetails from "../../../components/Contributors/ContributorsValidateDetails";
import NotFoundPage from "../../NotFoundPage";

const ContributorsValidate = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <ContributorsValidateJesuitsDetails path="jesuits" />
        </>
      )}
    </div>
  );
};

export default ContributorsValidate;
