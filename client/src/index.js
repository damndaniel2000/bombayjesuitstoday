import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorkers/serviceWorker";

import App from "./App";

import "font-awesome/css/font-awesome.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
