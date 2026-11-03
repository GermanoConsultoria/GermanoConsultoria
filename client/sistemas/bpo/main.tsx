import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Page from "./src/routes/index";
import "./src/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
