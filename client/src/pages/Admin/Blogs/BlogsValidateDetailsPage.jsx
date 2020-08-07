import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

import BlogValidateDetails from "../../../components/Blogs/BlogValidateDetails/BlogValidateDetails";
import NotFoundPage from "../../NotFoundPage";

const BlogsValidate = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <BlogValidateDetails />
        </>
      )}
    </div>
  );
};

export default BlogsValidate;
