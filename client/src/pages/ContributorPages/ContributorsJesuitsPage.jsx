import React from "react";
import ContributorsJesuits from "../../components/Contributors/ContributorsCards/Contributors";

const ContributorsPage = () => {
  return (
    <div style={{ minHeight: "150vh" }}>
      <ContributorsJesuits path="jesuits" />
    </div>
  );
};

export default ContributorsPage;
