export default function SectionHeader({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 mb-4.5 font-mono text-[11px] tracking-[0.18em] uppercase text-rose-ink-soft">
      <span className="w-7 h-px bg-rose-ink-soft inline-block"/>
      {title}
    </span>
  );
}