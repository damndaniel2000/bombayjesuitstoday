import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

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
        onClick={() => history.push("/videos/post/delete")}
      >
        Delete Posted Videos
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
    </>
  );
};

export default AdminNav;
