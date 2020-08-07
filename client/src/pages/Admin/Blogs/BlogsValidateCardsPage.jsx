import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

import BlogValidateCards from "../../../components/Blogs/BlogValidateCards/BlogValidateCards";
import NotFoundPage from "../../NotFoundPage";

const BlogsValidate = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? (
        <NotFoundPage />
      ) : (
        <>
          <BlogValidateCards />
        </>
      )}
    </div>
  );
};

export default BlogsValidate;
