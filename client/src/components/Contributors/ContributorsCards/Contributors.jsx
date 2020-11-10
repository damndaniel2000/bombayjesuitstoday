import React from "react";
import { Card, CardMedia, CardContent } from "@material-ui/core";

import "./Contributors.css";

import { videos, blogs, laity } from "./contriArrays";

const Contributors = () => {
  const contriCards = (arr) =>
    arr.map((item) => (
      <Card>
        <CardMedia image={item.img} title={item.name} />
        <CardContent>
          {console.log(item.img)}
          <h4>{item.name}</h4>
          <h6>{item.location}</h6>
          <p>{item.quote}</p>
        </CardContent>
      </Card>
    ));

  return (
    <>
      <h2> Meet Our Contributors </h2>
      <h3>Videos</h3>
      {contriCards(videos)}
    </>
  );
};

export default Contributors;
