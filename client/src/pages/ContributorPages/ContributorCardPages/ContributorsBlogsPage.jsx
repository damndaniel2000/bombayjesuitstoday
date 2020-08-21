import React from "react";
import ContributorsBlogs from "../../../components/Contributors/ContributorsCards/Contributors";

const ContributorsPage = () => {
  return (
    <div style={{ minHeight: "150vh" }}>
      <ContributorsBlogs path="blogs" />
    </div>
  );
};

export default ContributorsPage;
