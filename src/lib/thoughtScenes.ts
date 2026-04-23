export interface AsciiScene {
  label: string;
  svg: string;
}

const SCENES: AsciiScene[] = [
  {
    label: "ice skating",
    svg: `
      <svg width="100%" height="100%" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#b5727a" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <text x="10" y="14" font-size="9" fill="#b5727a" stroke="none" font-family="serif" opacity="0.5">❅</text>
          <text x="95" y="20" font-size="7" fill="#b5727a" stroke="none" font-family="serif" opacity="0.5">❆</text>
          <text x="55" y="10" font-size="6" fill="#b5727a" stroke="none" font-family="serif" opacity="0.4">*</text>
          <circle cx="60" cy="32" r="11" stroke-width="1.2"/>
          <path d="M49 26 Q38 18 36 30 Q34 42 40 52 Q44 62 46 75 Q48 88 50 100" stroke-width="1.4"/>
          <path d="M71 26 Q82 18 84 30 Q86 42 80 52 Q76 62 74 75 Q72 88 70 100" stroke-width="1.4"/>
          <path d="M50 22 Q48 10 60 8 Q72 10 70 22" stroke-width="1.2"/>
          <path d="M40 35 Q32 50 34 68 Q36 82 40 95" stroke-width="1"/>
          <path d="M80 35 Q88 50 86 68 Q84 82 80 95" stroke-width="1"/>
          <path d="M52 23 Q55 20 58 23" stroke-width="1.2"/>
          <circle cx="55" cy="21" r="1.5" stroke-width="1"/>
          <line x1="55" y1="31" x2="58" y2="31" stroke-width="1.3"/>
          <line x1="62" y1="31" x2="65" y2="31" stroke-width="1.3"/>
          <line x1="55" y1="31" x2="54" y2="29" stroke-width="0.8"/>
          <line x1="65" y1="31" x2="66" y2="29" stroke-width="0.8"/>
          <path d="M57 36 Q60 38 63 36" stroke-width="1"/>
          <circle cx="49" cy="35" r="1.5" stroke-width="1"/>
          <line x1="60" y1="43" x2="60" y2="50" stroke-width="1.2"/>
          <path d="M44 50 Q60 46 76 50 L78 76 Q60 81 42 76 Z" stroke-width="1.2"/>
          <path d="M56 50 Q60 54 64 50" stroke-width="1"/>
          <path d="M42 76 Q36 82 30 80" stroke-width="1.2"/>
          <path d="M78 76 Q84 82 90 80" stroke-width="1.2"/>
          <path d="M46 76 Q44 85 40 90" stroke-width="1.2"/>
          <path d="M74 76 Q76 85 80 90" stroke-width="1.2"/>
          <path d="M44 57 Q30 54 20 58" stroke-width="1.2"/>
          <path d="M76 57 Q90 54 100 58" stroke-width="1.2"/>
          <path d="M50 76 L46 104" stroke-width="1.2"/>
          <path d="M70 76 L74 104" stroke-width="1.2"/>
          <path d="M38 104 L52 104" stroke-width="1.5"/>
          <path d="M68 104 L82 104" stroke-width="1.5"/>
          <line x1="43" y1="104" x2="43" y2="108" stroke-width="1"/>
          <line x1="75" y1="104" x2="75" y2="108" stroke-width="1"/>
          <path d="M8 118 Q60 113 112 118" stroke-width="1" opacity="0.5"/>
          <path d="M4 123 Q60 118 116 123" stroke-width="0.7" opacity="0.3"/>
        </g>
      </svg>
    `,
  },
  {
    label: "picnic with friends",
    svg: `
      <svg width="100%" height="100%" viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#b5727a" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="60" cy="16" r="7" stroke-width="1.2"/>
          <line x1="60" y1="5" x2="60" y2="2" stroke-width="1"/>
          <line x1="60" y1="27" x2="60" y2="30" stroke-width="1"/>
          <line x1="49" y1="10" x2="47" y2="8" stroke-width="1"/>
          <line x1="71" y1="10" x2="73" y2="8" stroke-width="1"/>
          <line x1="49" y1="22" x2="47" y2="24" stroke-width="1"/>
          <line x1="71" y1="22" x2="73" y2="24" stroke-width="1"/>
          <circle cx="28" cy="58" r="8" stroke-width="1.2"/>
          <path d="M22 53 Q20 48 22 46" stroke-width="1"/>
          <path d="M20 64 Q14 66 12 70" stroke-width="1.2"/>
          <path d="M36 64 Q40 68 38 72" stroke-width="1.2"/>
          <path d="M24 66 L18 80" stroke-width="1.2"/>
          <path d="M32 66 L34 80" stroke-width="1.2"/>
          <circle cx="92" cy="58" r="8" stroke-width="1.2"/>
          <path d="M86 53 Q84 48 86 46" stroke-width="1"/>
          <path d="M84 64 Q78 66 76 70" stroke-width="1.2"/>
          <path d="M100 64 Q104 68 102 72" stroke-width="1.2"/>
          <path d="M88 66 L82 80" stroke-width="1.2"/>
          <path d="M96 66 L98 80" stroke-width="1.2"/>
          <path d="M10 90 Q60 85 110 90 L108 100 Q60 96 12 100 Z" stroke-width="1.2" opacity="0.6"/>
          <circle cx="45" cy="88" r="4" stroke-width="1"/>
          <path d="M52 88 Q55 84 58 88" stroke-width="1"/>
          <circle cx="65" cy="87" r="3" stroke-width="1"/>
          <path d="M72 84 L72 92 M68 88 L76 88" stroke-width="1"/>
          <path d="M5 105 Q60 100 115 105" stroke-width="1" opacity="0.4"/>
        </g>
      </svg>
    `,
  },
  {
    label: "brunch dates",
    svg: `
      <svg width="100%" height="100%" viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#b5727a" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="15" y="10" width="38" height="32" rx="3" stroke-width="1.2" opacity="0.5"/>
          <line x1="34" y1="10" x2="34" y2="42" stroke-width="0.8" opacity="0.5"/>
          <line x1="15" y1="26" x2="53" y2="26" stroke-width="0.8" opacity="0.5"/>
          <rect x="67" y="10" width="38" height="32" rx="3" stroke-width="1.2" opacity="0.5"/>
          <line x1="86" y1="10" x2="86" y2="42" stroke-width="0.8" opacity="0.5"/>
          <line x1="67" y1="26" x2="105" y2="26" stroke-width="0.8" opacity="0.5"/>
          <circle cx="34" cy="60" r="9" stroke-width="1.2"/>
          <path d="M27 56 Q24 50 26 47" stroke-width="1"/>
          <path d="M25 68 Q18 70 16 76" stroke-width="1.2"/>
          <path d="M43 68 Q48 70 50 76" stroke-width="1.2"/>
          <path d="M30 69 L26 88" stroke-width="1.2"/>
          <path d="M38 69 L42 88" stroke-width="1.2"/>
          <circle cx="86" cy="60" r="9" stroke-width="1.2"/>
          <path d="M79 56 Q76 50 78 47" stroke-width="1"/>
          <path d="M77 68 Q70 70 68 76" stroke-width="1.2"/>
          <path d="M95 68 Q100 70 102 76" stroke-width="1.2"/>
          <path d="M82 69 L78 88" stroke-width="1.2"/>
          <path d="M90 69 L94 88" stroke-width="1.2"/>
          <path d="M8 90 L112 90" stroke-width="1.5"/>
          <path d="M26 82 Q26 90 34 90 Q42 90 42 82 Z" stroke-width="1"/>
          <path d="M42 85 Q46 85 46 82" stroke-width="0.8"/>
          <path d="M78 82 Q78 90 86 90 Q94 90 94 82 Z" stroke-width="1"/>
          <path d="M94 85 Q98 85 98 82" stroke-width="0.8"/>
          <path d="M32 80 Q33 76 32 73" stroke-width="0.8" opacity="0.5"/>
          <path d="M36 80 Q37 76 36 73" stroke-width="0.8" opacity="0.5"/>
          <path d="M84 80 Q85 76 84 73" stroke-width="0.8" opacity="0.5"/>
          <path d="M88 80 Q89 76 88 73" stroke-width="0.8" opacity="0.5"/>
          <ellipse cx="60" cy="88" rx="10" ry="3" stroke-width="1"/>
          <ellipse cx="60" cy="84" rx="9" ry="2.5" stroke-width="1"/>
          <ellipse cx="60" cy="80" rx="8" ry="2.5" stroke-width="1"/>
        </g>
      </svg>
    `,
  },
  {
    label: "at the cinema",
    svg: `
      <svg width="100%" height="100%" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#b5727a" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <rect x="6" y="6" width="108" height="62" rx="3" stroke-width="1.3"/>
          <text x="60" y="26" font-size="6.5" fill="#b5727a" stroke="none" font-family="serif" text-anchor="middle" font-style="italic" letter-spacing="0.5">ONE BATTLE</text>
          <text x="60" y="35" font-size="6.5" fill="#b5727a" stroke="none" font-family="serif" text-anchor="middle" font-style="italic" letter-spacing="0.5">AFTER ANOTHER</text>
          <text x="14" y="28" font-size="5" fill="#b5727a" stroke="none" font-family="serif" opacity="0.6">★</text>
          <text x="100" y="28" font-size="5" fill="#b5727a" stroke="none" font-family="serif" opacity="0.6">★</text>
          <path d="M14 56 L28 38 L40 50 L54 30 L70 56" stroke-width="0.9" opacity="0.5"/>
          <circle cx="88" cy="28" r="7" stroke-width="0.9" opacity="0.4"/>
          <path d="M10 56 L110 56" stroke-width="0.7" opacity="0.3"/>
          <line x1="10" y1="44" x2="110" y2="44" stroke-width="0.4" opacity="0.15"/>
          <line x1="10" y1="50" x2="110" y2="50" stroke-width="0.4" opacity="0.15"/>
          <circle cx="22" cy="96" r="7" stroke-width="1.2"/>
          <path d="M16 91 Q13 86 15 84" stroke-width="1"/>
          <path d="M28 91 Q32 86 30 84" stroke-width="1"/>
          <path d="M16 102 L12 118" stroke-width="1.2"/>
          <path d="M28 102 L32 118" stroke-width="1.2"/>
          <circle cx="60" cy="93" r="8" stroke-width="1.2"/>
          <path d="M52 89 Q46 84 46 94 Q46 106 50 118" stroke-width="1.2"/>
          <path d="M68 89 Q74 84 74 94 Q74 106 70 118" stroke-width="1.2"/>
          <path d="M52 101 L48 118" stroke-width="1.2"/>
          <path d="M68 101 L72 118" stroke-width="1.2"/>
          <circle cx="98" cy="96" r="7" stroke-width="1.2"/>
          <path d="M92 91 Q89 86 91 84" stroke-width="1"/>
          <path d="M104 91 Q107 86 105 84" stroke-width="1"/>
          <path d="M92 102 L88 118" stroke-width="1.2"/>
          <path d="M104 102 L108 118" stroke-width="1.2"/>
          <path d="M54 105 L56 118 L64 118 L66 105 Z" stroke-width="1"/>
          <path d="M53 105 Q60 102 67 105" stroke-width="0.8"/>
          <path d="M4 122 L116 122" stroke-width="0.7" opacity="0.35"/>
        </g>
      </svg>
    `,
  },
  {
    label: "reading",
    svg: `
      <svg width="100%" height="100%" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#b5727a" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="88" cy="16" r="1.8" stroke-width="1" opacity="0.5"/>
          <circle cx="95" cy="10" r="2.5" stroke-width="1" opacity="0.4"/>
          <circle cx="103" cy="6" r="3.5" stroke-width="1" opacity="0.3"/>
          <path d="M20 78 L20 108 Q20 115 28 115 L92 115 Q100 115 100 108 L100 78" stroke-width="1.2" opacity="0.5"/>
          <path d="M14 78 Q14 68 20 68 L20 98" stroke-width="1.2" opacity="0.5"/>
          <path d="M106 78 Q106 68 100 68 L100 98" stroke-width="1.2" opacity="0.5"/>
          <path d="M14 98 L106 98" stroke-width="1" opacity="0.4"/>
          <circle cx="60" cy="50" r="11" stroke-width="1.2"/>
          <path d="M49 44 Q38 34 35 46 Q32 58 38 70 Q42 80 44 92 Q46 102 47 115" stroke-width="1.4"/>
          <path d="M71 44 Q82 34 85 46 Q88 58 82 70 Q78 80 76 92 Q74 102 73 115" stroke-width="1.4"/>
          <path d="M50 40 Q48 26 60 24 Q72 26 70 40" stroke-width="1.3"/>
          <path d="M36 48 Q28 62 30 80 Q32 94 36 108" stroke-width="1"/>
          <path d="M84 48 Q92 62 90 80 Q88 94 84 108" stroke-width="1"/>
          <path d="M44 100 Q46 106 44 112 Q42 118 44 124" stroke-width="0.9"/>
          <path d="M76 100 Q74 106 76 112 Q78 118 76 124" stroke-width="0.9"/>
          <path d="M51 40 Q54 37 57 40" stroke-width="1.2"/>
          <circle cx="54" cy="38" r="1.5" stroke-width="1"/>
          <path d="M50 37 Q52 34 54 36" stroke-width="0.8"/>
          <path d="M58 37 Q56 34 54 36" stroke-width="0.8"/>
          <circle cx="49" cy="54" r="1.5" stroke-width="1"/>
          <line x1="49" y1="56" x2="49" y2="60" stroke-width="1"/>
          <circle cx="49" cy="61" r="1.2" stroke-width="1"/>
          <line x1="55" y1="50" x2="57" y2="50" stroke-width="1.3"/>
          <line x1="62" y1="50" x2="64" y2="50" stroke-width="1.3"/>
          <line x1="55" y1="50" x2="54" y2="48" stroke-width="0.8"/>
          <line x1="56" y1="50" x2="55" y2="48" stroke-width="0.8"/>
          <line x1="64" y1="50" x2="65" y2="48" stroke-width="0.8"/>
          <line x1="63" y1="50" x2="64" y2="48" stroke-width="0.8"/>
          <path d="M46 61 Q60 57 74 61 L76 88 Q60 93 44 88 Z" stroke-width="1.2"/>
          <path d="M56 61 Q60 65 64 61" stroke-width="1"/>
          <path d="M46 70 Q38 74 34 78" stroke-width="1.2"/>
          <path d="M74 70 Q82 74 86 78" stroke-width="1.2"/>
          <path d="M32 76 Q60 72 88 76 L88 94 Q60 90 32 94 Z" stroke-width="1.2"/>
          <line x1="60" y1="72" x2="60" y2="94" stroke-width="0.8"/>
          <line x1="36" y1="81" x2="56" y2="80" stroke-width="0.6" opacity="0.5"/>
          <line x1="36" y1="85" x2="56" y2="84" stroke-width="0.6" opacity="0.5"/>
          <line x1="36" y1="89" x2="56" y2="88" stroke-width="0.6" opacity="0.5"/>
          <line x1="64" y1="80" x2="84" y2="81" stroke-width="0.6" opacity="0.5"/>
          <line x1="64" y1="84" x2="84" y2="85" stroke-width="0.6" opacity="0.5"/>
          <line x1="64" y1="88" x2="84" y2="89" stroke-width="0.6" opacity="0.5"/>
        </g>
      </svg>
    `,
  },
];

export default SCENES;