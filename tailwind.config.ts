import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            screens: {
                'xsm': '500px',
                'md': '820px',
                'lg': '1440px'
            },
            margin: {
                'by-section': '5rem'
            },
            scrollMargin: {
                'by-section': '8rem'
            },
            fontFamily: {
                'serif': ['Judson'],
                'cursive': ['Shalimar']
            },
            colors : {
                'mocha': '#6F4E37',
                'mocha-light': 'rgba(111, 78, 55 , 0.9)',
                'mocha-lighter': 'rgba(111, 78, 55, 0.8)',
                'dm-card-bg': '#8F6F56',
                'dm-card-shadow': '',
                'dm-input-bg': '',
                'dm-input-txt': '',
                'dm-border': '',
                
                'cream': '#FEF8F2',
                'cream-light': 'rgba(254, 248, 242, 0.9)',
                'cream-lighter': 'rgba(254, 248, 242, 0.8)',
                'lm-card-bg': '#F9EDE3',
                'lm-input-bg': '#FFFFFF',
                'lm-input-txt': '#C7B6B6',
                'lm-border': '#C4A69F'
            },
            dropShadow: {
                'dm-card-shadow': '2px 2px 4px #E0D4CC',
                'lm-card-shadow': '2px 2px 4px #E0D4CC',
            },
            keyframes: {
                rotateIcon: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                },
                shakeIcon: {
                    '0%': { transform: 'rotate(-20deg)' },
                    '25%': { transform: 'rotate(20deg)' },
                    '50%': { transform: 'rotate(-20deg)' },
                    '100%': { transform: 'rotate(0deg)' }
                },
                shakeCard: {
                    '0%': { transform: 'rotate(-2deg)' },
                    '25%': { transform: 'rotate(2deg)' },
                    '50%': { transform: 'rotate(-2deg)' },
                    '100%': { transform: 'rotate(0deg)' }
                }
            },
            animation: {
                'rotate-icon': 'rotateIcon 2s linear infinite',
                'shake-icon': 'shakeIcon 1s linear',
                'shake-card': 'shakeCard 1s ease-in',
            }
        },
    },
    plugins: [],
};
export default config;