import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Page from "./pages";
import store from "./store";
import "./assets/font/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Page />
    </Provider>
  </React.StrictMode>,
);
