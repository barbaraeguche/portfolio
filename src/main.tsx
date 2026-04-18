import CursorTrail from "@/components/cursorTrail";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";

const trailColors = [
  "var(--color-rose-accent)",
  "var(--color-rose-sage)",
  "var(--color-rose-sky)",
  "var(--color-rose-gold)",
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CursorTrail colors={trailColors}/>
    <App/>
  </StrictMode>,
);
