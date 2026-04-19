import { routes } from "@/lib/routes";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(routes[0].name);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    for (const route of [...routes].reverse()) {
      const el = document.querySelector(route.url) as HTMLElement | null;
      if (el && y >= el.offsetTop - 190) {
        setActive(route.name);
        break;
      }
    }
  });

  const handleClick = (e: React.MouseEvent, name: string, url: string) => {
    e.preventDefault();
    setActive(name);
    document.querySelector(url)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  return (
    <header className="flex items-baseline justify-between py-5 border-b border-dashed border-rose-paper-line">
      <span className="font-display-alt font-medium text-[22px] tracking-[-0.01em] text-rose-ink no-underline">
        b. eguche
      </span>
      <nav className="flex gap-5.5 text-[13px]">
        {routes.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            onClick={(e) => handleClick(e, name, url)}
            className={`relative py-0.5 tracking-[0.02em] no-underline transition-colors duration-200 ${active === name ? "font-semibold text-rose-ink" : "font-normal text-rose-ink-soft"}`}
          >
            {name}
            {active === name && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-0.75 h-0.5 bg-rose-accent rounded-sm opacity-55"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        ))}
      </nav>
    </header>
  );
}