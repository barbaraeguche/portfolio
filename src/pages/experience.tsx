import SectionHeader from "@/components/sectionHeader";
import { experience } from "@/lib/data";
import type { IExperience } from "@/lib/types";

const ROLE_H = 90; // px — must match min-h-22.5 on role rows

export default function Experience() {
  return (
    <section id="experience" className="mt-32 pt-5.5 border-t border-dashed border-rose-paper-line">
      <SectionHeader title="file 02 · experience"/>

      <div className="space-y-12">
        {experience.map((exp, expIdx) => (
          <div key={expIdx} className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10">
            <div>
              <a
                href={exp.url}
                target="_blank"
                className="font-display italic font-medium text-[22px] text-rose-ink no-underline border-b border-rose-ink-faint inline-block"
              >
                {exp.company}
              </a>
            </div>

            <div className="flex gap-5">
              <div className="shrink-0">
                <BranchWithThorns roles={exp.roles}/>
              </div>

              <div className="flex flex-col">
                {exp.roles.map((role, roleIdx) => (
                  <div key={roleIdx} className="flex flex-col justify-center min-h-22.5">
                    <div className="mb-2">
                      <span className="text-[18px] font-semibold text-rose-ink font-body">
                        {role.title}
                      </span>
                      {role.is_internship && (
                        <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-rose-ink-soft ml-2 bg-rose-bg2 px-1.5 py-0.5 rounded-[3px]">
                          Internship
                        </span>
                      )}
                    </div>

                    <div className="font-mono text-[13px] text-rose-ink-soft mb-1">
                      {role.period}
                    </div>
                    <div className="text-[14px] text-rose-ink font-body">
                      {role.team}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Blossom({ cx, y, role }: {
  cx: number,
  y: number,
  role: IExperience["roles"][number]
}) {
  const { is_current } = role;
  
  const petalFill = is_current ? "#ffb7c5" : "#9a8070";
  const petalStroke = is_current ? "#d4789a" : "#6a5040";
  const centerFill = is_current ? "#fff0a0" : "#7a6050";
  const angles = [0, 72, 144, 216, 288];

  const blossom = (
    <g>
      {angles.map((a) => (
        <path
          key={a}
          transform={`rotate(${a})`}
          d={"M 0 0 C -6 -2.5 -7.5 -11.5 -2 -17 Q 0 -15 2 -17 C 7.5 -11.5 6 -2.5 0 0 Z"}
          fill={petalFill}
          stroke={petalStroke}
          strokeWidth="0.5"
        />
      ))}
      <circle r={3.5} fill={centerFill}/>
      {is_current && angles.map((a) => {
        const rad = (a - 90) * (Math.PI / 180);
        return (
          <line key={a} x1={0} y1={0} x2={Math.cos(rad) * 7} y2={Math.sin(rad) * 7} stroke="#e8c060" strokeWidth="0.9" strokeLinecap="round"/>
        );
      })}
    </g>
  );

  return (
    <g>
      <circle cx={cx} cy={y} r={3} fill="#5a3a28"/>
      <g transform={`translate(${cx}, ${y})`}>
        {is_current
          ? <g className="cherry-blossom">{blossom}</g>
          : <g transform="rotate(25) scale(0.85)" opacity="0.5">{blossom}</g>
        }
      </g>
    </g>
  );
}

// vine that winds around the branch from bottom to top
function buildVinePath(cx: number, h: number): string {
  const cp = 9;
  const halfPeriod = 16;

  let d = `M ${cx} ${h}`;
  let y = h;
  let side = 1;

  while (y > 0) {
    const nextY = Math.max(0, y - halfPeriod);
    d += `C ${cx + side * cp} ${y - halfPeriod * 0.25}`;
    d += `${cx + side * cp} ${nextY + halfPeriod * 0.25}`;
    d += `${cx} ${nextY}`;
    y = nextY;
    side *= -1;
  }

  return d;
}

function BranchWithThorns({ roles }: { roles: IExperience["roles"] }) {
  const h = roles.length * ROLE_H;
  const cx = 18;

  return (
    <svg width="52" height={h} viewBox={`0 0 52 ${h}`} fill="none" aria-hidden="true">
      <line x1={cx} y1={0} x2={cx} y2={h} stroke="#5a3a28" strokeWidth="2" strokeLinecap="round"/>
      <path d={buildVinePath(cx, h)} stroke="#4a2a18" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.85"/>
      {roles.map((role, i) => (
        <Blossom key={i} cx={cx} y={(i + 0.5) * ROLE_H} role={role}/>
      ))}
    </svg>
  );
}