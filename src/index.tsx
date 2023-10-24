import React from "react";
import ReactDOM from "react-dom/client";
import { StyleSheetManager } from "styled-components";

import { App } from "./App";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyleSheetManager enableVendorPrefixes>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
