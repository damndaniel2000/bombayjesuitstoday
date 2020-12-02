import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import {
  TextField,
  Button,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";

import * as subscribe from "../../serviceWorkers/subscription";

import Alert from "../Custom/Alerts";

const useStyles = makeStyles((theme) => ({
  form: {
    "& div": {
      marginBottom: ".5rem",
    },
    "& .MuiTextField-root": {
      width: "40%",
      borderRadius: 0,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
    },
  },
  buttons: {
    width: "20%",
    [theme.breakpoints.down("xs")]: {
      width: "60%",
    },
  },
}));

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    showNotification: false,
    severity: "",
    msg: "",
  });

  const history = useHistory();
  const classes = useStyles();

  const buttons = [
    {
      text: "Post Video",
      func: () => history.push("/videos/post"),
    },
    {
      text: "Validate Videos",
      func: () => history.push("/videos/validate/spiritual"),
    },
    {
      text: "Upload Blog",
      func: () => history.push("/blogs/upload"),
    },
    {
      text: "Validate Blogs",
      func: () => history.push("/blogs/validate"),
    },
    {
      text: "Subscribe",
      func: () => subscribe.subscribeUser(),
    },
  ];

  const { userData, setUserData } = useContext(UserContext);

  const handleSubmit = async () => {
    setLoading(true);
    if (userData.user) {
      localStorage.removeItem("auth-token");
      setLoading(false);
      window.location.href = "/login";
      return;
    }
    try {
      const loginUser = { userName, password };
      const loginRes = await axios.post("/api/users/login", loginUser);
      setLoading(!loading);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      setLoading(false);
      setNotification({
        showNotification: true,
        severity: "success",
        msg: "Logged in successfully",
      });
    } catch (err) {
      setLoading(false);
      setNotification({
        showNotification: true,
        severity: "error",
        msg: err.response.data.msg ? err.response.data.msg : null,
      });
    }
  };

  return (
    <div className="video-post-form">
      <h2> Login </h2>

      <form className={classes.form}>
        <div>
          <TextField
            variant="outlined"
            color="secondary"
            size="small"
            name="uploader"
            label="Username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                document.getElementById("login-button").click();
              }
            }}
            required
          />
        </div>

        <div>
          <TextField
            type="password"
            variant="outlined"
            size="small"
            color="secondary"
            value={password}
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                document.getElementById("login-button").click();
              }
            }}
            required
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          id="login-button"
          className={classes.buttons}
          onClick={handleSubmit}
        >
          {!userData.user && <>Login</>}
          {userData.user && <>Logout</>}
        </Button>
        <br />
        <br />
        {loading && <CircularProgress />}
      </form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {userData.user &&
          buttons.map((item) => (
            <Button
              variant="contained"
              style={{
                backgroundColor: "rgb(27, 186, 46)",
                color: "#fff",
                width: "30%",
                marginBottom: ".5rem",
              }}
              className={classes.buttons}
              onClick={item.func}
            >
              {item.text}
            </Button>
          ))}
      </div>
      <Alert
        open={notification.showNotification}
        setNotification={setNotification}
        severity={notification.severity}
        message={notification.msg}
      />
    </div>
  );
};

export default Login;
