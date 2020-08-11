import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

import ContributorsValidate from "../../../components/Contributors/ContributorsValidateCards";
import NotFoundPage from "../../NotFoundPage";

const ContributorsValidateCards = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <p className="contributors-page-title">Jesuit Contributors</p>
          <ContributorsValidate path="jesuits" />
          <p className="contributors-page-title">Laity Contributors</p>
          <ContributorsValidate path="laity" />
        </>
      )}
    </div>
  );
};

export default ContributorsValidateCards;
