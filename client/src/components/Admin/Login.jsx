import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, Input, message, Modal, Button } from "antd";
import UserContext from "../../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [modalVisible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const history = useHistory();

  const { userData, setUserData } = useContext(UserContext);

  const handleSubmit = async () => {
    try {
      const loginUser = { userName, password };
      const loginRes = await axios.post("/api/users/login", loginUser);
      setLoading(!loading);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      setVisible(!modalVisible);
      loginSuccessMessage();
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
      console.log(err);
    }
  };

  const loginSuccessMessage = () => {
    return message.success("Logged in Successfully", 5);
  };

  return (
    <>
      {userData.user ? null : (
        <Modal
          title="Login"
          centered
          visible={modalVisible}
          closable={false}
          footer={[
            <Button
              key="back"
              onClick={() => {
                setVisible(!modalVisible);
                history.push("/");
              }}
            >
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleSubmit}
            >
              Login
            </Button>,
          ]}
        >
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Form layout="vertical" size="large">
            <Form.Item name="userName">
              <Input
                placeholder="Username"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </Form.Item>

            <Form.Item name="password">
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autocomplete="on"
                required
              />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default Login;
