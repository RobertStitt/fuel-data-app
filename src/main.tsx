import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  ClientSideRowModelModule,
  ModuleRegistry,
  QuickFilterModule,
} from "ag-grid-community";

ModuleRegistry.registerModules([QuickFilterModule, ClientSideRowModelModule]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
