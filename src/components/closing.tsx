export default function Closing() {
  return (
    <div className="mt-36 flex flex-col items-center text-center">
      <div className="w-px h-14 bg-rose-paper-line mb-10"/>

      <blockquote className="font-display-alt italic font-medium text-[clamp(22px,3.8vw,46px)] leading-[1.35] tracking-[-0.015em] text-rose-ink-soft max-w-[24ch]">
        do not go where the path may lead, go instead where there is no path and leave a trail.
      </blockquote>

      <p className="mt-6 font-mono text-[11px] tracking-[0.2em] uppercase text-rose-ink-faint">
        — Ralph Waldo Emerson
      </p>
    </div>
  );
}
