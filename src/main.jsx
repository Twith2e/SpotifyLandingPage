import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AudioProvider from "./AudioContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AudioProvider>
      <App />
    </AudioProvider>
  </StrictMode>
);
