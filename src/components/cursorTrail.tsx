import { useEffect } from "react";

export default function CursorTrail({ colors }: { colors: string[] }) {
  useEffect(() => {
    // spade cursor element — starts offscreen to avoid corner flash
    const cursor = document.createElement("div");
    cursor.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      font-size: 20px;
      line-height: 1;
      color: var(--color-rose-accent);
      transform: translate(-50%, -50%);
      user-select: none;
      left: -999px;
      top: -999px;
    `;
    cursor.textContent = "\u273f";
    document.body.appendChild(cursor);

    // swap to flower on links or buttons
    const onOver = (e: MouseEvent) => {
      const isLink = (e.target as Element).closest("a, button") !== null;
      cursor.textContent = isLink ? "\u2665" : "\u273f";
      cursor.style.color = isLink ? "var(--color-rose-sage)" : "var(--color-rose-accent)";
    };
    document.addEventListener("mouseover", onOver);

    let last = 0;
    const onMove = (e: MouseEvent) => {
      // track cursor to mouse position
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      // throttle trail dots to ~16fps
      const now = performance.now();
      if (now - last < 60) return;
      last = now;

      const dot = document.createElement("div");
      const size = 4 + Math.random() * 8;

      dot.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: ${size}px;
        height: ${size}px;
        pointer-events: none;
        z-index: 9998;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        mix-blend-mode: multiply;
        opacity: 0.75;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
      `;
      document.body.appendChild(dot);

      // fade and shrink dot then remove
      requestAnimationFrame(() => {
        dot.style.transition = "opacity .9s ease, transform .9s ease";
        dot.style.opacity = "0";
        dot.style.transform = "translate(-50%, -50%) scale(.3)";
      });
      setTimeout(() => dot.remove(), 1000);
    };

    document.addEventListener("mousemove", onMove);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cursor.remove();
    };
  }, [colors]);

  return null;
}