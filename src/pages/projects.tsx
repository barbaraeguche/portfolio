import SectionHeader from "@/components/sectionHeader";
import { projects } from "@/lib/data";
import type { IProject } from "@/lib/types";

export default function Projects() {
  return (
    <section id="projects" className="mt-32 pt-5.5 border-t border-dashed border-rose-paper-line scroll-mt-35">
      <SectionHeader title="file 03 · projects"/>

      <h2 className="font-display-alt font-medium text-[clamp(36px,5vw,63px)] leading-[0.96] tracking-[-0.02em] text-rose-ink mb-8">
        Things I've Built
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project}/>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: IProject }) {
  return (
    <article className="project-card relative p-6 rounded-xl bg-rose-cloud border-[1.5px] border-rose-paper-line shadow-[0_8px_20px_rgba(74,36,16,0.1),0_2px_4px_rgba(74,36,16,0.06)]">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display-alt font-medium text-[22px] text-rose-ink tracking-[-0.01em] leading-[1.1]">
          {project.name}
        </h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} on GitHub`}
          className="project-link-icon flex items-center justify-center w-7 h-7 shrink-0 text-rose-ink-soft"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </div>

      <p className="text-[14.5px] leading-relaxed text-rose-ink-soft mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech, i) => (
          <span
            key={i}
            className="stack-bubble font-mono text-[11px] tracking-[0.04em] text-rose-ink bg-rose-bg2 border border-rose-paper-line px-2.5 py-1 rounded-full inline-flex items-center gap-1.5"
          >
            <span className={`w-1.5 h-1.5 rounded-full inline-block ${i % 3 === 0 ? "bg-rose-accent" : i % 3 === 1 ? "bg-rose-sage" : "bg-rose-sky"}`}/>
            {tech.trim()}
          </span>
        ))}
      </div>
    </article>
  );
}