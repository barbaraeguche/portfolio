import SCENES from "../lib/scenes";
import { useEffect, useState } from "react";

const ROTATE_SECONDS = 7;

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

export default function CloudBubble() {
  const scenes = SCENES;
  const [idx, setIdx] = useState(0);
  
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % scenes.length), ROTATE_SECONDS * 1000);
    return () => clearInterval(id);
  }, [scenes.length]);
  
  return (
    <div className="relative pt-7.5">
      <div className="relative w-full ml-auto">
        <svg
          className="w-full h-auto block"
          viewBox="30 5 500 335"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            {/* mask blur — controls how soft the edges fade */}
            <filter id="cloud-edge" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="4"/>
            </filter>

            {/* rim blur — used for the soft depth underlay */}
            <filter id="rim-blur" x="-12%" y="-12%" width="124%" height="124%">
              <feGaussianBlur stdDeviation="7"/>
            </filter>

            <mask id="cloud-mask">
              <path d={cloudPath} fill="white" filter="url(#cloud-edge)"/>
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
          
          <g className="animate-cloud-in [animation-delay:0.2s]">
            <path d={cloudPath} fill="var(--color-rose-ink)" opacity="0.07" filter="url(#rim-blur)"/>
            <rect x="30" y="5" width="500" height="440" fill="url(#cloudBody)" mask="url(#cloud-mask)"/>
            <rect x="30" y="5" width="500" height="440" fill="url(#cloudHighlight)" mask="url(#cloud-mask)"/>
          </g>
        </svg>
        
        {/* image scenes rendered over the cloud */}
        <div className="absolute inset-[12%_16%_8%_10%] animate-fade-up [animation-delay:0.7s]">
          {/*{scenes.map((s, i) => (*/}
          {/*  <div key={i} className={`scene-frame absolute inset-0 ${i === idx ? "is-active" : ""}`}>*/}
          {/*    <img*/}
          {/*      src={s.image}*/}
          {/*      alt={s.label}*/}
          {/*      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[75%] object-contain"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*))}*/}
        </div>
      </div>
      
      <div className="mt-8 text-center font-mono text-[11px] tracking-[0.18em] uppercase text-rose-ink-soft animate-fade-up [animation-delay:0.8s]">
        — {scenes[idx]?.label} —
      </div>

      <div className="flex gap-1.5 justify-center mt-7 animate-fade-up [animation-delay:0.9s]">
        {scenes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={"scene " + (i + 1)}
            className={`w-5.5 h-1 rounded-xs border-none p-0 transition-[opacity,background] duration-300 focus-visible:outline-2 focus-visible:outline-rose-accent focus-visible:outline-offset-3 ${i === idx ? "bg-rose-accent opacity-100" : "bg-rose-ink-faint opacity-40"}`}
          />
        ))}
      </div>
    </div>
  );
}