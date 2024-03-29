import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorkers/serviceWorker";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
