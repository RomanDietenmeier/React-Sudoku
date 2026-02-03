import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./simple-notify/simple-notify.css";
import "./simple-notify/simple-notify.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
