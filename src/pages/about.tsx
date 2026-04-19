import SectionHeader from "@/components/sectionHeader";
import ThoughtBubble from "@/components/thoughtBubble";
import { socials } from "@/lib/data";
import { type ReactNode } from "react";

export default function About() {
  const email = socials[0];
  const elsewhere = socials.slice(1);

  return (
    <section id="about" className="grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-14 pt-18 items-start scroll-mt-20">
      <div>
        <SectionHeader title="file 01 · about"/>

        <h1 className="font-display-alt font-medium text-[clamp(60px,9vw,120px)] leading-[0.92] tracking-[-0.025em] text-rose-ink mb-1.5">
          <span className="block">Barbara</span>
          <span className="block italic pl-[0.6em] md:pl-[1.4em] text-rose-ink-soft">
            Egu<em className="not-italic text-rose-accent font-display-alt">che</em>
          </span>
        </h1>

        <div className="mt-4.5 flex flex-wrap gap-y-2 gap-x-3.5 items-center font-mono text-[13px] text-rose-ink-soft">
          <span>cs student</span>
          <span className="w-1.25 h-1.25 rounded-full bg-rose-sage inline-block"/>
          <span>builds soft, sturdy software</span>
          <span className="w-1.25 h-1.25 rounded-full bg-rose-accent inline-block"/>
          <span>likes ice skating</span>
        </div>

        <div className="mt-9 max-w-[52ch] text-[16.5px] text-rose-ink leading-[1.7] text-justify">
          <span className="inline-block mb-3 font-mono text-[10px] tracking-[0.14em] uppercase text-rose-ink-faint bg-rose-bg2 py-0.75 px-2 rounded-[3px]">
            a little more on me
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p className="mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4.5 gap-x-8 max-w-120">
          <DlRow label="based in">toronto, ca</DlRow>
          <DlRow label="studying">computer science</DlRow>

          <DlRow label={email.name}>
            <a
              href={email.url}
              target="_blank"
              className="text-rose-ink no-underline border-b border-rose-ink-faint pb-px"
            >
              {email.url.replace("mailto:", "")}
            </a>
          </DlRow>

          <DlRow label="elsewhere">
            {elsewhere.map((s, i) => (
              <span key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  className="text-rose-ink no-underline border-b border-rose-ink-faint"
                >
                  {s.name}
                </a>
                {i < elsewhere.length - 1 && " · "}
              </span>
            ))}
          </DlRow>
        </dl>
      </div>
      <ThoughtBubble/>
    </section>
  );
}

function DlRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-rose-paper-line pt-2.5">
      <span className="block font-mono text-[10px] tracking-[0.16em] uppercase text-rose-ink-faint mb-1">{label}</span>
      <span className="text-sm text-rose-ink">{children}</span>
    </div>
  );
}