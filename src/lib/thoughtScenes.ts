export interface AsciiScene {
  label: string;
  svg: string;
}

const SCENES: AsciiScene[] = [
  {
    label: "ice skating",
    svg: `
      <svg width="100%" height="100%" viewBox="0 0 200 180" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <!-- snowy mountain bg -->
        <path d="M0 120 L40 80 L80 100 L120 70 L160 90 L200 110 L200 180 L0 180 Z" fill="#e8f4f8" opacity="0.3"/>
        <!-- snowflakes -->
        <g fill="#a8d5e8" opacity="0.6">
          <circle cx="30" cy="20" r="1.5"/>
          <circle cx="170" cy="35" r="2"/>
          <circle cx="90" cy="15" r="1.2"/>
          <circle cx="140" cy="45" r="1.8"/>
          <circle cx="60" cy="55" r="1.3"/>
          <circle cx="155" cy="60" r="1"/>
        </g>

        <!-- barbara - PPG style -->
        <g transform="translate(100, 116)">
          <!-- hair puffs -->
          <circle cx="-17" cy="-55" r="12" fill="#2d1810" stroke="#1a0d08" stroke-width="2"/>
          <circle cx="17" cy="-55" r="12" fill="#2d1810" stroke="#1a0d08" stroke-width="2"/>
          <circle cx="0" cy="-60" r="13" fill="#2d1810" stroke="#1a0d08" stroke-width="2"/>
          <!-- head -->
          <circle cx="0" cy="-38" r="19" fill="#8b5a3c" stroke="#1a0d08" stroke-width="2.5"/>
          <!-- PPG eyes - huge ovals -->
          <ellipse cx="-7.5" cy="-39" rx="7" ry="9" fill="white" stroke="#1a0d08" stroke-width="1.5"/>
          <ellipse cx="7.5" cy="-39" rx="7" ry="9" fill="white" stroke="#1a0d08" stroke-width="1.5"/>
          <ellipse cx="-7.5" cy="-38" rx="5.5" ry="7.5" fill="#1a0d08"/>
          <ellipse cx="7.5" cy="-38" rx="5.5" ry="7.5" fill="#1a0d08"/>
          <circle cx="-5" cy="-41" r="2" fill="white" opacity="0.9"/>
          <circle cx="10" cy="-41" r="2" fill="white" opacity="0.9"/>
          <!-- mouth -->
          <path d="M-4 -27 Q0 -24 4 -27" stroke="#8b3838" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <!-- body - PPG trapezoid dress (narrow top, flares at bottom) -->
          <path d="M-10 -19 L-14 6 Q-14 11 -9 11 L9 11 Q14 11 14 6 L10 -19 Z" fill="#ff3377" stroke="#1a0d08" stroke-width="2.5"/>
          <!-- stub arm circles -->
          <circle cx="-18" cy="-10" r="5.5" fill="#ff3377" stroke="#1a0d08" stroke-width="2"/>
          <circle cx="18" cy="-10" r="5.5" fill="#ff3377" stroke="#1a0d08" stroke-width="2"/>
          <!-- boots -->
          <ellipse cx="-6" cy="14" rx="7" ry="4" fill="#f4a0b5" stroke="#1a0d08" stroke-width="1.5"/>
          <ellipse cx="6" cy="14" rx="7" ry="4" fill="#f4a0b5" stroke="#1a0d08" stroke-width="1.5"/>
          <!-- skate blades -->
          <line x1="-13" y1="18" x2="1" y2="18" stroke="#5a6a70" stroke-width="2" stroke-linecap="round"/>
          <line x1="-1" y1="18" x2="13" y2="18" stroke="#5a6a70" stroke-width="2" stroke-linecap="round"/>
        </g>

        <!-- ice surface -->
        <ellipse cx="100" cy="148" rx="80" ry="7" fill="#d4e8f0" opacity="0.5"/>
        <path d="M20 151 Q100 149 180 151" stroke="#a8d5e8" stroke-width="1" fill="none" opacity="0.6"/>
      </svg>
    `,
  },
  {
    label: "picnic with friends",
    svg: `
      <svg width="100%" height="100%" viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
        <!-- sun -->
        <circle cx="200" cy="28" r="15" fill="#ffcc00" opacity="0.7"/>
        <g stroke="#ffcc00" stroke-width="2" opacity="0.5">
          <line x1="200" y1="8" x2="200" y2="0"/>
          <line x1="220" y1="28" x2="228" y2="28"/>
          <line x1="213" y1="15" x2="219" y2="9"/>
          <line x1="213" y1="41" x2="219" y2="47"/>
        </g>
        <!-- grass -->
        <rect x="0" y="150" width="240" height="30" fill="#55cc66" opacity="0.3"/>
        <!-- picnic blanket -->
        <rect x="35" y="130" width="170" height="28" fill="#ff99bb" opacity="0.3" rx="3"/>
        <line x1="120" y1="130" x2="120" y2="158" stroke="#cc3366" stroke-width="1" opacity="0.3"/>
        <line x1="35" y1="144" x2="205" y2="144" stroke="#cc3366" stroke-width="1" opacity="0.3"/>

        <!-- barbara - left, PPG style -->
        <g transform="translate(62, 140)">
          <circle cx="-13" cy="-43" r="9" fill="#2d1810" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="13" cy="-43" r="9" fill="#2d1810" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="0" cy="-48" r="10" fill="#2d1810" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="0" cy="-29" r="15" fill="#8b5a3c" stroke="#1a0d08" stroke-width="2"/>
          <ellipse cx="-6" cy="-30" rx="5.5" ry="7" fill="white" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="6" cy="-30" rx="5.5" ry="7" fill="white" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="-6" cy="-29" rx="4" ry="5.5" fill="#1a0d08"/>
          <ellipse cx="6" cy="-29" rx="4" ry="5.5" fill="#1a0d08"/>
          <circle cx="-4" cy="-32" r="1.5" fill="white" opacity="0.9"/>
          <circle cx="8" cy="-32" r="1.5" fill="white" opacity="0.9"/>
          <path d="M-3 -21 Q0 -19 3 -21" stroke="#8b3838" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          <!-- trapezoid dress -->
          <path d="M-8 -14 L-11 4 Q-11 8 -7 8 L7 8 Q11 8 11 4 L8 -14 Z" fill="#ff3377" stroke="#1a0d08" stroke-width="2"/>
          <circle cx="-15" cy="-8" r="4.5" fill="#ff3377" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="15" cy="-8" r="4.5" fill="#ff3377" stroke="#1a0d08" stroke-width="1.5"/>
          <ellipse cx="-5" cy="10" rx="5" ry="3" fill="#8b5a3c" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="5" cy="10" rx="5" ry="3" fill="#8b5a3c" stroke="#1a0d08" stroke-width="1.2"/>
        </g>

        <!-- friend 1 - middle, PPG style -->
        <g transform="translate(120, 140)">
          <circle cx="-12" cy="-42" r="8" fill="#4a2f1a" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="12" cy="-42" r="8" fill="#4a2f1a" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="0" cy="-29" r="15" fill="#d4a574" stroke="#1a0d08" stroke-width="2"/>
          <ellipse cx="-6" cy="-30" rx="5.5" ry="7" fill="white" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="6" cy="-30" rx="5.5" ry="7" fill="white" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="-6" cy="-29" rx="4" ry="5.5" fill="#1a0d08"/>
          <ellipse cx="6" cy="-29" rx="4" ry="5.5" fill="#1a0d08"/>
          <circle cx="-4" cy="-32" r="1.5" fill="white" opacity="0.9"/>
          <circle cx="8" cy="-32" r="1.5" fill="white" opacity="0.9"/>
          <path d="M-3 -21 Q0 -19 3 -21" stroke="#8b3838" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          <path d="M-8 -14 L-11 4 Q-11 8 -7 8 L7 8 Q11 8 11 4 L8 -14 Z" fill="#4488ff" stroke="#1a0d08" stroke-width="2"/>
          <circle cx="-15" cy="-8" r="4.5" fill="#4488ff" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="15" cy="-8" r="4.5" fill="#4488ff" stroke="#1a0d08" stroke-width="1.5"/>
          <ellipse cx="-5" cy="10" rx="5" ry="3" fill="#d4a574" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="5" cy="10" rx="5" ry="3" fill="#d4a574" stroke="#1a0d08" stroke-width="1.2"/>
        </g>

        <!-- friend 2 - right, PPG style -->
        <g transform="translate(178, 140)">
          <circle cx="-11" cy="-41" r="8" fill="#1a0d08" stroke="#0a0505" stroke-width="1.5"/>
          <circle cx="11" cy="-41" r="8" fill="#1a0d08" stroke="#0a0505" stroke-width="1.5"/>
          <circle cx="0" cy="-29" r="15" fill="#c49a7c" stroke="#1a0d08" stroke-width="2"/>
          <ellipse cx="-6" cy="-30" rx="5.5" ry="7" fill="white" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="6" cy="-30" rx="5.5" ry="7" fill="white" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="-6" cy="-29" rx="4" ry="5.5" fill="#1a0d08"/>
          <ellipse cx="6" cy="-29" rx="4" ry="5.5" fill="#1a0d08"/>
          <circle cx="-4" cy="-32" r="1.5" fill="white" opacity="0.9"/>
          <circle cx="8" cy="-32" r="1.5" fill="white" opacity="0.9"/>
          <path d="M-3 -21 Q0 -19 3 -21" stroke="#8b3838" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          <path d="M-8 -14 L-11 4 Q-11 8 -7 8 L7 8 Q11 8 11 4 L8 -14 Z" fill="#22cc66" stroke="#1a0d08" stroke-width="2"/>
          <circle cx="-15" cy="-8" r="4.5" fill="#22cc66" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="15" cy="-8" r="4.5" fill="#22cc66" stroke="#1a0d08" stroke-width="1.5"/>
          <ellipse cx="-5" cy="10" rx="5" ry="3" fill="#c49a7c" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="5" cy="10" rx="5" ry="3" fill="#c49a7c" stroke="#1a0d08" stroke-width="1.2"/>
        </g>

        <!-- picnic items -->
        <circle cx="93" cy="141" r="5" fill="#c89240" opacity="0.7"/>
        <circle cx="148" cy="143" r="4" fill="#ff6655" opacity="0.7"/>
        <rect x="108" y="144" width="10" height="12" fill="#ffbb44" opacity="0.6" rx="1"/>

        <!-- grass blades around blanket edges -->
        <g stroke="#55aa44" stroke-width="1.2" stroke-linecap="round" opacity="0.55">
          <line x1="28" y1="160" x2="24" y2="150"/>
          <line x1="33" y1="160" x2="37" y2="149"/>
          <line x1="208" y1="160" x2="205" y2="150"/>
          <line x1="213" y1="160" x2="217" y2="150"/>
          <line x1="20" y1="165" x2="18" y2="156"/>
          <line x1="220" y1="165" x2="223" y2="156"/>
        </g>
        <!-- small flower left of blanket -->
        <g transform="translate(21, 153)" opacity="0.85">
          <circle cx="0" cy="-3.5" r="2" fill="#ffbbdd"/>
          <circle cx="0" cy="3.5" r="2" fill="#ffbbdd"/>
          <circle cx="-3.5" cy="0" r="2" fill="#ffbbdd"/>
          <circle cx="3.5" cy="0" r="2" fill="#ffbbdd"/>
          <circle cx="0" cy="0" r="2.2" fill="#ffee55"/>
        </g>
        <!-- small flower right of blanket -->
        <g transform="translate(219, 156)" opacity="0.75">
          <circle cx="0" cy="-3" r="1.7" fill="#ffbbdd"/>
          <circle cx="0" cy="3" r="1.7" fill="#ffbbdd"/>
          <circle cx="-3" cy="0" r="1.7" fill="#ffbbdd"/>
          <circle cx="3" cy="0" r="1.7" fill="#ffbbdd"/>
          <circle cx="0" cy="0" r="1.9" fill="#ffee55"/>
        </g>
      </svg>
    `,
  },
  {
    label: "brunch dates",
    svg: `
      <svg width="100%" height="100%" viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
        <!-- table -->
        <rect x="20" y="108" width="180" height="55" fill="#8a6a4a" opacity="0.2" rx="4"/>
        <rect x="15" y="103" width="190" height="10" fill="#a07850" opacity="0.3" rx="2"/>

        <!-- barbara - left, PPG style -->
        <g transform="translate(65, 116)">
          <circle cx="-14" cy="-48" r="10" fill="#2d1810" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="14" cy="-48" r="10" fill="#2d1810" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="0" cy="-53" r="11" fill="#2d1810" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="0" cy="-33" r="16" fill="#8b5a3c" stroke="#1a0d08" stroke-width="2.2"/>
          <ellipse cx="-6.5" cy="-34" rx="6" ry="7.5" fill="white" stroke="#1a0d08" stroke-width="1.4"/>
          <ellipse cx="6.5" cy="-34" rx="6" ry="7.5" fill="white" stroke="#1a0d08" stroke-width="1.4"/>
          <ellipse cx="-6.5" cy="-33" rx="4.5" ry="6" fill="#1a0d08"/>
          <ellipse cx="6.5" cy="-33" rx="4.5" ry="6" fill="#1a0d08"/>
          <circle cx="-4.5" cy="-36" r="1.7" fill="white" opacity="0.9"/>
          <circle cx="8.5" cy="-36" r="1.7" fill="white" opacity="0.9"/>
          <path d="M-3.5 -24 Q0 -21 3.5 -24" stroke="#8b3838" stroke-width="1.3" fill="none" stroke-linecap="round"/>
          <!-- trapezoid dress -->
          <path d="M-10 -17 L-13 5 Q-13 9 -8 9 L8 9 Q13 9 13 5 L10 -17 Z" fill="#ff3377" stroke="#1a0d08" stroke-width="2.2"/>
          <!-- arms reaching toward coffee -->
          <circle cx="-17" cy="-10" r="5.5" fill="#ff3377" stroke="#1a0d08" stroke-width="1.8"/>
          <circle cx="17" cy="-10" r="5.5" fill="#ff3377" stroke="#1a0d08" stroke-width="1.8"/>
        </g>

        <!-- friend - right, PPG style -->
        <g transform="translate(155, 116)">
          <circle cx="-12" cy="-46" r="9" fill="#4a2f1a" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="12" cy="-46" r="9" fill="#4a2f1a" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="0" cy="-33" r="16" fill="#d4a574" stroke="#1a0d08" stroke-width="2.2"/>
          <ellipse cx="-6.5" cy="-34" rx="6" ry="7.5" fill="white" stroke="#1a0d08" stroke-width="1.4"/>
          <ellipse cx="6.5" cy="-34" rx="6" ry="7.5" fill="white" stroke="#1a0d08" stroke-width="1.4"/>
          <ellipse cx="-6.5" cy="-33" rx="4.5" ry="6" fill="#1a0d08"/>
          <ellipse cx="6.5" cy="-33" rx="4.5" ry="6" fill="#1a0d08"/>
          <circle cx="-4.5" cy="-36" r="1.7" fill="white" opacity="0.9"/>
          <circle cx="8.5" cy="-36" r="1.7" fill="white" opacity="0.9"/>
          <path d="M-3.5 -24 Q0 -21 3.5 -24" stroke="#8b3838" stroke-width="1.3" fill="none" stroke-linecap="round"/>
          <path d="M-10 -17 L-13 5 Q-13 9 -8 9 L8 9 Q13 9 13 5 L10 -17 Z" fill="#4488ff" stroke="#1a0d08" stroke-width="2.2"/>
          <circle cx="-17" cy="-10" r="5.5" fill="#4488ff" stroke="#1a0d08" stroke-width="1.8"/>
          <circle cx="17" cy="-10" r="5.5" fill="#4488ff" stroke="#1a0d08" stroke-width="1.8"/>
        </g>

        <!-- coffee cups -->
        <g transform="translate(42, 133)">
          <rect x="-6" y="0" width="12" height="14" fill="#8a6a4a" stroke="#3d2817" stroke-width="1.2" rx="2"/>
          <ellipse cx="0" cy="0" rx="6" ry="2" fill="#5a4a3a" stroke="#3d2817" stroke-width="1"/>
          <path d="M6 4 Q10 4 10 8 Q10 12 6 12" stroke="#3d2817" stroke-width="1.2" fill="none"/>
          <path d="M-2 -3 Q0 -6 2 -3" stroke="#aaaaaa" stroke-width="0.8" fill="none" opacity="0.5"/>
        </g>
        <g transform="translate(178, 133)">
          <rect x="-6" y="0" width="12" height="14" fill="#8a6a4a" stroke="#3d2817" stroke-width="1.2" rx="2"/>
          <ellipse cx="0" cy="0" rx="6" ry="2" fill="#5a4a3a" stroke="#3d2817" stroke-width="1"/>
          <path d="M6 4 Q10 4 10 8 Q10 12 6 12" stroke="#3d2817" stroke-width="1.2" fill="none"/>
          <path d="M-2 -3 Q0 -6 2 -3" stroke="#aaaaaa" stroke-width="0.8" fill="none" opacity="0.5"/>
        </g>

        <!-- pancakes stack (center) -->
        <g transform="translate(110, 142)">
          <ellipse cx="0" cy="0" rx="12" ry="3" fill="#f4d03f" stroke="#c89240" stroke-width="1"/>
          <ellipse cx="0" cy="-4" rx="11" ry="3" fill="#f4d03f" stroke="#c89240" stroke-width="1"/>
          <ellipse cx="0" cy="-8" rx="10" ry="2.5" fill="#f4d03f" stroke="#c89240" stroke-width="1"/>
          <path d="M-2 -10 L-2 -16 Q-2 -18 0 -18 Q2 -18 2 -16 L2 -10" fill="#c89240" stroke="#8a6240" stroke-width="0.8"/>
        </g>

        <!-- croissant on small plate -->
        <g transform="translate(78, 137)">
          <ellipse cx="0" cy="3" rx="9" ry="2" fill="#e8d5a0" stroke="#c89240" stroke-width="0.8" opacity="0.6"/>
          <path d="M-7 1 Q-3 -6 0 -5 Q3 -6 7 1 Q3 2 0 1.5 Q-3 2 -7 1 Z" fill="#e8c070" stroke="#c89240" stroke-width="0.8"/>
          <path d="M-5 0 Q-1 -3 3 -4" stroke="#c89240" stroke-width="0.5" fill="none" opacity="0.5"/>
        </g>

        <!-- small bowl of berries -->
        <g transform="translate(143, 138)">
          <ellipse cx="0" cy="4" rx="9" ry="2.5" fill="#d4a870" stroke="#c89240" stroke-width="0.8" opacity="0.5"/>
          <path d="M-9 2 Q-9 -2 0 -2 Q9 -2 9 2 Z" fill="#e8d5a0" stroke="#c89240" stroke-width="0.8" opacity="0.6"/>
          <circle cx="-3" cy="-1" r="2.5" fill="#cc3355" opacity="0.85"/>
          <circle cx="1" cy="-2.5" r="2.5" fill="#7744aa" opacity="0.85"/>
          <circle cx="4" cy="-0.5" r="2.5" fill="#cc3355" opacity="0.85"/>
        </g>

        <!-- juice glass -->
        <g transform="translate(93, 131)">
          <path d="M-3.5 0 L-4.5 13 L4.5 13 L3.5 0 Z" fill="#ff9933" opacity="0.45" stroke="#cc7722" stroke-width="0.8"/>
          <ellipse cx="0" cy="0" rx="3.5" ry="1.3" fill="#ff9933" opacity="0.6"/>
          <ellipse cx="0" cy="13" rx="4.5" ry="1.5" fill="#cc7722" opacity="0.3"/>
        </g>

        <!-- small jam jar -->
        <g transform="translate(128, 132)">
          <rect x="-4" y="0" width="8" height="10" fill="#ff5566" opacity="0.5" stroke="#cc3344" stroke-width="0.8" rx="1"/>
          <rect x="-4" y="0" width="8" height="3" fill="#cc3344" opacity="0.4" rx="1"/>
          <ellipse cx="0" cy="0" rx="4" ry="1.2" fill="#cc3344" opacity="0.5"/>
        </g>
      </svg>
    `,
  },
  {
    label: "at the cinema",
    svg: `
      <svg width="100%" height="100%" viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <!-- movie screen -->
        <rect x="20" y="15" width="200" height="90" fill="#2d2d38" stroke="#1a1a22" stroke-width="2" rx="3"/>
        <text x="120" y="45" font-family="serif" font-size="10" fill="#c45a6b" text-anchor="middle" font-style="italic" letter-spacing="1">ONE BATTLE</text>
        <text x="120" y="60" font-family="serif" font-size="10" fill="#c45a6b" text-anchor="middle" font-style="italic" letter-spacing="1">AFTER ANOTHER</text>
        <text x="120" y="80" font-family="serif" font-size="7" fill="#8a6a7a" text-anchor="middle" opacity="0.7">sundown</text>

        <!-- faint audience bg silhouettes -->
        <g opacity="0.1" fill="#1a1a22">
          <circle cx="38" cy="128" r="10"/>
          <circle cx="202" cy="130" r="10"/>
        </g>

        <!-- friend left - PPG style -->
        <g transform="translate(63, 168)">
          <circle cx="-11" cy="-39" r="8" fill="#1a0d08" stroke="#0a0505" stroke-width="1.3"/>
          <circle cx="11" cy="-39" r="8" fill="#1a0d08" stroke="#0a0505" stroke-width="1.3"/>
          <circle cx="0" cy="-26" r="14" fill="#c49a7c" stroke="#1a0d08" stroke-width="2"/>
          <!-- eyes shifted up: looking at screen -->
          <ellipse cx="-5.5" cy="-27" rx="5" ry="6.5" fill="white" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="5.5" cy="-27" rx="5" ry="6.5" fill="white" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="-5.5" cy="-29" rx="4" ry="5.5" fill="#1a0d08"/>
          <ellipse cx="5.5" cy="-29" rx="4" ry="5.5" fill="#1a0d08"/>
          <circle cx="-3.5" cy="-31" r="1.4" fill="white" opacity="0.9"/>
          <circle cx="7.5" cy="-31" r="1.4" fill="white" opacity="0.9"/>
          <ellipse cx="0" cy="-18" rx="3" ry="2" fill="#8b3838" opacity="0.7"/>
          <!-- trapezoid dress -->
          <path d="M-8 -12 L-11 4 Q-11 8 -7 8 L7 8 Q11 8 11 4 L8 -12 Z" fill="#ff9922" stroke="#1a0d08" stroke-width="2"/>
          <circle cx="-15" cy="-7" r="4.5" fill="#ff9922" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="15" cy="-7" r="4.5" fill="#ff9922" stroke="#1a0d08" stroke-width="1.5"/>
        </g>

        <!-- barbara - center, PPG style -->
        <g transform="translate(120, 165)">
          <circle cx="-15" cy="-53" r="11" fill="#2d1810" stroke="#1a0d08" stroke-width="1.8"/>
          <circle cx="15" cy="-53" r="11" fill="#2d1810" stroke="#1a0d08" stroke-width="1.8"/>
          <circle cx="0" cy="-58" r="12" fill="#2d1810" stroke="#1a0d08" stroke-width="1.8"/>
          <circle cx="0" cy="-37" r="17" fill="#8b5a3c" stroke="#1a0d08" stroke-width="2.2"/>
          <!-- eyes shifted up: looking at screen -->
          <ellipse cx="-7" cy="-37" rx="6.5" ry="8" fill="white" stroke="#1a0d08" stroke-width="1.4"/>
          <ellipse cx="7" cy="-37" rx="6.5" ry="8" fill="white" stroke="#1a0d08" stroke-width="1.4"/>
          <ellipse cx="-7" cy="-40" rx="5" ry="6.5" fill="#1a0d08"/>
          <ellipse cx="7" cy="-40" rx="5" ry="6.5" fill="#1a0d08"/>
          <circle cx="-4.5" cy="-43" r="1.8" fill="white" opacity="0.9"/>
          <circle cx="9.5" cy="-43" r="1.8" fill="white" opacity="0.9"/>
          <ellipse cx="0" cy="-27" rx="3.5" ry="2.5" fill="#8b3838" opacity="0.7"/>
          <!-- trapezoid dress -->
          <path d="M-10 -19 L-14 6 Q-14 11 -9 11 L9 11 Q14 11 14 6 L10 -19 Z" fill="#ff3377" stroke="#1a0d08" stroke-width="2.2"/>
          <circle cx="-18" cy="-10" r="5.5" fill="#ff3377" stroke="#1a0d08" stroke-width="1.8"/>
          <circle cx="18" cy="-10" r="5.5" fill="#ff3377" stroke="#1a0d08" stroke-width="1.8"/>
        </g>

        <!-- friend right - PPG style -->
        <g transform="translate(178, 168)">
          <circle cx="-10" cy="-38" r="7.5" fill="#4a2f1a" stroke="#1a0d08" stroke-width="1.3"/>
          <circle cx="10" cy="-38" r="7.5" fill="#4a2f1a" stroke="#1a0d08" stroke-width="1.3"/>
          <circle cx="0" cy="-26" r="14" fill="#d4a574" stroke="#1a0d08" stroke-width="2"/>
          <!-- eyes shifted up: looking at screen -->
          <ellipse cx="-5.5" cy="-27" rx="5" ry="6.5" fill="white" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="5.5" cy="-27" rx="5" ry="6.5" fill="white" stroke="#1a0d08" stroke-width="1.2"/>
          <ellipse cx="-5.5" cy="-29" rx="4" ry="5.5" fill="#1a0d08"/>
          <ellipse cx="5.5" cy="-29" rx="4" ry="5.5" fill="#1a0d08"/>
          <circle cx="-3.5" cy="-31" r="1.4" fill="white" opacity="0.9"/>
          <circle cx="7.5" cy="-31" r="1.4" fill="white" opacity="0.9"/>
          <ellipse cx="0" cy="-18" rx="3" ry="2" fill="#8b3838" opacity="0.7"/>
          <path d="M-8 -12 L-11 4 Q-11 8 -7 8 L7 8 Q11 8 11 4 L8 -12 Z" fill="#4488ff" stroke="#1a0d08" stroke-width="2"/>
          <circle cx="-15" cy="-7" r="4.5" fill="#4488ff" stroke="#1a0d08" stroke-width="1.5"/>
          <circle cx="15" cy="-7" r="4.5" fill="#4488ff" stroke="#1a0d08" stroke-width="1.5"/>
        </g>

        <!-- popcorn bucket -->
        <g transform="translate(107, 188)">
          <path d="M-8 0 L-10 12 L10 12 L8 0 Z" fill="#e8d4a8" stroke="#c89240" stroke-width="1.2"/>
          <circle cx="-4" cy="-2" r="2.5" fill="#f4e8c8"/>
          <circle cx="0" cy="-4" r="3" fill="#f4e8c8"/>
          <circle cx="4" cy="-2" r="2.5" fill="#f4e8c8"/>
        </g>
      </svg>
    `,
  },
  {
    label: "reading",
    svg: `
      <svg width="100%" height="100%" viewBox="0 0 200 180" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <!-- thought bubbles -->
        <g opacity="0.35" fill="none" stroke="#8a6a7a" stroke-width="1.2">
          <circle cx="152" cy="28" r="10"/>
          <circle cx="167" cy="18" r="6"/>
          <circle cx="177" cy="11" r="3.5"/>
        </g>
        <!-- armchair -->
        <g opacity="0.2">
          <rect x="40" y="118" width="120" height="45" fill="#8a6a7a" rx="5"/>
          <rect x="35" y="108" width="15" height="65" fill="#8a6a7a" rx="3"/>
          <rect x="150" y="108" width="15" height="65" fill="#8a6a7a" rx="3"/>
        </g>

        <!-- barbara reading - PPG style -->
        <g transform="translate(100, 126)">
          <!-- hair puffs -->
          <circle cx="-16" cy="-56" r="12" fill="#2d1810" stroke="#1a0d08" stroke-width="2"/>
          <circle cx="16" cy="-56" r="12" fill="#2d1810" stroke="#1a0d08" stroke-width="2"/>
          <circle cx="0" cy="-62" r="13" fill="#2d1810" stroke="#1a0d08" stroke-width="2"/>
          <!-- head -->
          <circle cx="0" cy="-39" r="18" fill="#8b5a3c" stroke="#1a0d08" stroke-width="2.5"/>
          <!-- PPG eyes - iris shifted down: looking at book -->
          <ellipse cx="-7" cy="-39" rx="6.5" ry="8" fill="white" stroke="#1a0d08" stroke-width="1.5"/>
          <ellipse cx="7" cy="-39" rx="6.5" ry="8" fill="white" stroke="#1a0d08" stroke-width="1.5"/>
          <ellipse cx="-7" cy="-36" rx="5" ry="6.5" fill="#1a0d08"/>
          <ellipse cx="7" cy="-36" rx="5" ry="6.5" fill="#1a0d08"/>
          <circle cx="-5" cy="-37" r="1.5" fill="white" opacity="0.9"/>
          <circle cx="9" cy="-37" r="1.5" fill="white" opacity="0.9"/>
          <!-- content smile -->
          <path d="M-4 -29 Q0 -26 4 -29" stroke="#8b3838" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <!-- trapezoid dress -->
          <path d="M-10 -19 L-14 6 Q-14 11 -9 11 L9 11 Q14 11 14 6 L10 -19 Z" fill="#ff3377" stroke="#1a0d08" stroke-width="2.5"/>
          <!-- stub arm circles holding book -->
          <circle cx="-18" cy="-8" r="5.5" fill="#ff3377" stroke="#1a0d08" stroke-width="2"/>
          <circle cx="18" cy="-8" r="5.5" fill="#ff3377" stroke="#1a0d08" stroke-width="2"/>
          <!-- book -->
          <rect x="-19" y="0" width="38" height="26" fill="#7a92b4" stroke="#1a0d08" stroke-width="2" rx="1"/>
          <line x1="0" y1="0" x2="0" y2="26" stroke="#1a0d08" stroke-width="1.5"/>
          <line x1="-14" y1="8" x2="-4" y2="8" stroke="#5a7294" stroke-width="0.8" opacity="0.6"/>
          <line x1="-14" y1="13" x2="-4" y2="13" stroke="#5a7294" stroke-width="0.8" opacity="0.6"/>
          <line x1="-14" y1="18" x2="-4" y2="18" stroke="#5a7294" stroke-width="0.8" opacity="0.6"/>
          <line x1="4" y1="8" x2="14" y2="8" stroke="#5a7294" stroke-width="0.8" opacity="0.6"/>
          <line x1="4" y1="13" x2="14" y2="13" stroke="#5a7294" stroke-width="0.8" opacity="0.6"/>
          <line x1="4" y1="18" x2="14" y2="18" stroke="#5a7294" stroke-width="0.8" opacity="0.6"/>
        </g>

        <!-- floor shadow -->
        <ellipse cx="100" cy="155" rx="42" ry="6" fill="#8a6a7a" opacity="0.15"/>
      </svg>
    `,
  },
];

export default SCENES;