import { useEffect } from "react";

export default function CursorTrail({ colors }: { colors: string[] }) {
  useEffect(() => {
    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last < 60) return;
      last = now;
      const dot = document.createElement("div");
      dot.className = "trail-dot";
      dot.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;pointer-events:none;z-index:9999;border-radius:50%;transform:translate(-50%,-50%);mix-blend-mode:multiply;opacity:.75`;
      const size = 4 + Math.random() * 8;
      dot.style.width = dot.style.height = size + "px";
      dot.style.background = colors[Math.floor(Math.random() * colors.length)];
      document.body.appendChild(dot);
      requestAnimationFrame(() => {
        dot.style.transition = "opacity .9s ease, transform .9s ease";
        dot.style.opacity = "0";
        dot.style.transform = "translate(-50%,-50%) scale(.3)";
      });
      setTimeout(() => dot.remove(), 1000);
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, [colors]);
  return null;
}