import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Counter from "./Counter.jsx";
import Colors from "./Colors.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Counter />
    <Colors />
  </StrictMode>
);
