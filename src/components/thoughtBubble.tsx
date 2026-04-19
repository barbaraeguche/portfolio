import ASCII_SCENES from "@/lib/asciiScenes";
import { useEffect, useState } from "react";

const ROTATE_SECONDS = 9;

// cloud outline path — bumpy top, smooth rounded bottom
const cloudPath =
  "M 90 255 " +
  "C 65 255 55 228 65 205 " +
  "C 52 182 62 158 85 152 " +
  "C 75 120 95 100 120 108 " +
  "C 122 75 148 60 175 72 " +
  "C 182 42 218 32 244 52 " +
  "C 258 22 302 20 322 48 " +
  "C 342 28 382 35 395 68 " +
  "C 420 58 448 78 448 108 " +
  "C 475 115 488 148 474 172 " +
  "C 495 196 488 232 464 242 " +
  "C 458 278 425 295 395 282 " +
  "C 378 312 332 325 302 304 " +
  "C 278 332 228 328 206 305 " +
  "C 178 328 132 316 120 290 " +
  "C 95 298 75 278 90 255 Z";

export default function ThoughtBubble() {
  const scenes = ASCII_SCENES;
  const [idx, setIdx] = useState(0);
  
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % scenes.length), ROTATE_SECONDS * 1000);
    return () => clearInterval(id);
  }, [scenes.length]);
  
  return (
    <div className="relative pt-7.5">
      <div className="relative w-full max-w-160 ml-auto">
        <svg
          className="w-full h-auto block"
          viewBox="30 5 500 440"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            {/* mask blur — controls how soft the edges fade */}
            <filter id="cloud-edge" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="4"/>
            </filter>
            <filter id="bubble-edge" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5"/>
            </filter>
            
            {/* rim blur — used for the soft depth underlay */}
            <filter id="rim-blur" x="-12%" y="-12%" width="124%" height="124%">
              <feGaussianBlur stdDeviation="7"/>
            </filter>
            
            <mask id="cloud-mask">
              <path d={cloudPath} fill="white" filter="url(#cloud-edge)"/>
            </mask>
            <mask id="bubble-1">
              <circle cx="78" cy="355" r="19" fill="white" filter="url(#bubble-edge)"/>
            </mask>
            <mask id="bubble-2">
              <circle cx="57" cy="398" r="12" fill="white" filter="url(#bubble-edge)"/>
            </mask>
            <mask id="bubble-3">
              <circle cx="42" cy="430" r="7" fill="white" filter="url(#bubble-edge)"/>
            </mask>
            
            {/* main fill — bright center fading to warm cream at edges */}
            <radialGradient id="cloudBody" cx="42%" cy="28%" r="62%" fx="42%" fy="28%">
              <stop offset="0%" stopColor="#fffdf8"/>
              <stop offset="55%" stopColor="var(--color-rose-cloud)"/>
              <stop offset="100%" stopColor="var(--color-rose-cloud-edge)"/>
            </radialGradient>
            
            {/* soft highlight — simulates top-left light source */}
            <radialGradient id="cloudHighlight" cx="38%" cy="22%" r="42%">
              <stop offset="0%" stopColor="white" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>
          
          {/* soft depth rim — blurred dark underlay gives the edge subtle definition */}
          <path d={cloudPath} fill="var(--color-rose-ink)" opacity="0.07" filter="url(#rim-blur)"/>
          <circle cx="78" cy="355" r="19" fill="var(--color-rose-ink)" opacity="0.07" filter="url(#rim-blur)"/>
          <circle cx="57" cy="398" r="12" fill="var(--color-rose-ink)" opacity="0.07" filter="url(#rim-blur)"/>
          <circle cx="42" cy="430" r="7" fill="var(--color-rose-ink)" opacity="0.07" filter="url(#rim-blur)"/>
          
          {/* cloud body — fill shown through soft-edged mask */}
          <rect x="30" y="5" width="500" height="440" fill="url(#cloudBody)" mask="url(#cloud-mask)"/>
          <rect x="30" y="5" width="500" height="440" fill="url(#cloudHighlight)" mask="url(#cloud-mask)"/>
          
          {/* thought trail — three shrinking bubbles leading to the thinker */}
          <circle cx="78" cy="355" r="19" fill="var(--color-rose-cloud)" mask="url(#bubble-1)"/>
          <circle cx="57" cy="398" r="12" fill="var(--color-rose-cloud)" mask="url(#bubble-2)"/>
          <circle cx="42" cy="430" r="7" fill="var(--color-rose-cloud)" mask="url(#bubble-3)"/>
        </svg>
        
        <div className="absolute inset-[7%_14%_30%_14%] flex items-center justify-center">
          {scenes.map((s, i) => (
            <div
              key={i}
              className={`scene-frame absolute inset-0 flex items-center justify-center ${i === idx ? "is-active" : ""}`}
            >
              <pre
                className="font-mono text-[clamp(8px,1.05vw,11px)] leading-[1.08] text-rose-ink whitespace-pre text-center m-0 tracking-[0.02em]">
                {s.art}
              </pre>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center font-mono text-[11px] tracking-[0.18em] uppercase text-rose-ink-soft">
        — {scenes[idx]?.label} —
      </div>
      
      <div className="flex gap-1.5 justify-center mt-7">
        {scenes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={"scene " + (i + 1)}
            className={`w-7 h-1.5 rounded-xs border-none p-0 transition-[opacity,background] duration-300 ${i === idx ? "bg-rose-accent opacity-100" : "bg-rose-ink-faint opacity-40"}`}
          />
        ))}
      </div>
    </div>
  );
}