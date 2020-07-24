import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

import Login from "../../components/Auth/Login";
import AdminNav from "../../components/Admin/AdminNav/AdminNav";

const LoginPage = () => {
  const { userData } = useContext(UserContext);

  return (
    <>
      {!userData.user ? null : <AdminNav />}
      <Login />
    </>
  );
};

export default LoginPage;
