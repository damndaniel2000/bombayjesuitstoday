import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

import BlogValidateDetails from "../../../components/Blogs/BlogValidateDetails/BlogValidateDetails";
import NotFoundPage from "../../NotFoundPage";

const BlogsValidate = () => {
  const { userData } = useContext(UserContext);

  return !userData.user ? <NotFoundPage /> : <BlogValidateDetails />;
};

export default BlogsValidate;
