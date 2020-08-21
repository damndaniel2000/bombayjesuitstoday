import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";

import JesuitValidateCards from "../../../../components/Videos/VideoValidation/ValidationCards/ValidationCards";
import NotFoundPage from "../../../NotFoundPage";

const BlogsValidate = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <JesuitValidateCards />
        </>
      )}
    </div>
  );
};

export default BlogsValidate;
