import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//import weui styles
import "weui";
import "react-weui/build/packages/react-weui.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
