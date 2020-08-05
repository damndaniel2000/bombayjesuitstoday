import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

import Login from "../../components/Admin/Login";
import AdminNav from "../../components/Admin/AdminNav";

const LoginPage = () => {
  const { userData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "150vh" }}>
      {!userData.user ? null : <AdminNav />}
      <Login />
    </div>
  );
};

export default LoginPage;
