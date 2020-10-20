import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

import * as subscribe from "../../serviceWorkers/subscription";

const AdminNav = () => {
  const history = useHistory();

  return (
    <>
      <br /> <br /> <br /> <br /> <br />
      <Button
        type="primary"
        style={{
          backgroundColor: "#1a137c",
          border: "none",
          padding: "0.4rem 2rem",
        }}
        onClick={() => history.push("/videos/post")}
      >
        Post Video
      </Button>
      <br /> <br /> <br />
      <Button
        type="primary"
        style={{ backgroundColor: "#1a137c", border: "none" }}
        onClick={() => history.push("/videos/validate/spiritual")}
      >
        Validate Videos
      </Button>
      <br /> <br /> <br />
      <Button
        type="primary"
        style={{
          backgroundColor: "#1a137c",
          border: "none",
          padding: "0.4rem 2rem",
        }}
        onClick={() => history.push("/videos/uploads")}
      >
        Uploaded Videos
      </Button>
      <br /> <br /> <br />
      <Button
        type="primary"
        style={{
          backgroundColor: "#1a137c",
          border: "none",
          padding: "0.4rem 2rem",
        }}
        onClick={() => history.push("/contributors/validate")}
      >
        Validate Contributors
      </Button>
      <br /> <br /> <br />
      <Button
        type="primary"
        style={{
          backgroundColor: "#1a137c",
          border: "none",
          padding: "0.4rem 2rem",
        }}
        onClick={() => history.push("/blogs/validate")}
      >
        Validate Blogs
      </Button>
      <br /> <br /> <br />
      <Button
        type="primary"
        style={{
          backgroundColor: "#1a137c",
          border: "none",
          padding: "0.4rem 2rem",
        }}
        onClick={() => {
          subscribe.subscribeUser();
        }}
      >
        Subscribe To Notifications
      </Button>
    </>
  );
};

export default AdminNav;
