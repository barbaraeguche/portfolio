export default function Footer() {
  return (
    <footer className="mt-24 pt-5.5 flex justify-between items-center border-t border-dashed border-rose-paper-line
                      font-mono text-[11px] tracking-[0.12em] text-rose-ink-faint uppercase"
    >
      <span>&copy; {(new Date).getFullYear()} barbara eguche</span>
      <span>made with care · cream &amp; rose</span>
    </footer>
  );
}