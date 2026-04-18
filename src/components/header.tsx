import { routes } from "@/lib/routes";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(routes[0].name);
  
  return (
    <header className="flex items-baseline justify-between pb-6 border-b border-dashed border-rose-paper-line">
      <span className="font-display-alt font-medium text-[22px] tracking-[-0.01em] text-rose-ink no-underline">
        b. eguche
      </span>
      <nav className="flex gap-5.5 text-[13px]">
        {routes.map(({ name, url }) => {
          const current = active === name;
          return (
            <a
              key={name}
              href={url}
              onClick={() => setActive(name)}
              className={`relative py-0.5 tracking-[0.02em] no-underline ${current ? "font-semibold text-rose-ink" : "font-normal text-rose-ink-soft"}`}
            >
              {name}
              {current && (
                <span className="absolute left-0 right-0 -bottom-0.75 h-0.5 bg-rose-accent rounded-sm opacity-55"/>
              )}
            </a>
          );
        })}
      </nav>
    </header>
  );
}