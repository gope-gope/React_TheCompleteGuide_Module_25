import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import ConfigureStore from "./hooks-store/products-store";

ConfigureStore();

ReactDOM.render(
  <ConfigureStore>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigureStore>,
  document.getElementById("root")
);
