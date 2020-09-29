import React, { useEffect } from "react";

import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ minHeight: "150vh" }}>
      <PrivacyPolicy />
    </div>
  );
};

export default PrivacyPolicyPage;
