type SvgProps = { className?: string };

function Heart({ size = 34, fill = "#c45a6b", className = "" }: {
  size?: number,
  fill?: string
} & SvgProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size * (32 / 34)}
      viewBox="0 0 34 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M17 28C5 20 2 14 2 9.5 2 5.5 5 3 8.5 3c2.5 0 4.5 1.5 5.5 3.5C15 4.5 17 3 19.5 3 23 3 26 5.5 26 9.5c0 4.5-3 10.5-15 18.5z"
        fill={fill}
        stroke="#4a2410"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 8c-1 .5-1.5 1.5-1.5 2.5"
        stroke="#fff"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function Ribbon({ className = "" }: SvgProps) {
  return (
    <svg className={className} width="60" height="120" viewBox="0 0 60 120" fill="none" aria-hidden="true">
      <path
        d="M20 4c-4 8-4 16 0 24s4 16 0 24 -4 16 0 24 4 16 0 24 -4 16 0 24"
        stroke="#6b8e6f"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 4c4 8 4 16 0 24s-4 16 0 24 4 16 0 24 -4 16 0 24 4 16 0 24"
        stroke="#7ba07f"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

function IceSkate({ className = "" }: SvgProps) {
  return (
    <svg className={className} width="64" height="56" viewBox="0 0 64 56" fill="none" aria-hidden="true">
      <path
        d="M14 8 L34 8 C42 8 46 14 46 22 L46 34 L18 34 C12 34 8 30 8 24 L8 14 C8 10 10 8 14 8 Z"
        fill="#f4a0b5"
        stroke="#4a2410"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M22 12 L36 14 M22 18 L36 20 M22 24 L36 26" stroke="#fffaf0" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="28" cy="14" r="1.2" fill="#fffaf0" />
      <circle cx="28" cy="20" r="1.2" fill="#fffaf0" />
      <circle cx="28" cy="26" r="1.2" fill="#fffaf0" />
      <path d="M6 38 L52 38 L48 44 L10 44 Z" fill="#d4d4dc" stroke="#4a2410" strokeWidth="1.2" />
      <path d="M4 46 L54 46" stroke="#4a2410" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="42" cy="11" r="4" fill="#c45a6b" stroke="#4a2410" strokeWidth="1" />
    </svg>
  );
}

function Star({ className = "", size = 22, }: {
  size?: number
} & SvgProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M11 1 L13 9 L21 11 L13 13 L11 21 L9 13 L1 11 L9 9 Z"
        fill="#c89b3c"
        stroke="#4a2410"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Squiggle({ className = "" }: SvgProps) {
  return (
    <svg className={className} width="80" height="40" viewBox="0 0 80 40" fill="none" aria-hidden="true">
      <path
        d="M2 20 Q12 5 22 20 T42 20 T62 20 T82 20"
        stroke="#7a4a2e"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Decorations() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-2">
      <div className="fixed top-27.5 left-[6%] -rotate-12">
        <Heart size={34} />
      </div>
      <div className="fixed bottom-[18%] right-[4%] rotate-18">
        <Heart size={26} fill="#d8a4ad" />
      </div>
      <div className="fixed top-[35%] left-[2%] -rotate-[8deg]">
        <Ribbon />
      </div>
      <div className="fixed bottom-[8%] left-[38%] -rotate-6 hidden md:block">
        <IceSkate />
      </div>
      <div className="fixed top-[18%] right-[18%] hidden md:block">
        <Star />
      </div>
      <div className="fixed top-[58%] right-[1%] hidden md:block opacity-50">
        <Squiggle />
      </div>
    </div>
  );
}