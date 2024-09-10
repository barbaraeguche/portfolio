'use client';
import { useTheme } from '@/hooks/theme-context';
import { Sun, Moon } from 'lucide-react';

export default function SwitchTheme() {
	const { theme, toggleTheme } = useTheme();
	return (
		<button onClick={toggleTheme}
				className="fixed bottom-4 right-4 w-[2.5rem] h-[2.5rem] backdrop-blur-md
				flex items-center justify-center rounded-full border-2 border-lm-border
				text-cream bg-mocha-lighter dark:text-mocha dark:bg-cream-lighter
				hover:scale-[1.15] active:scale-105 transition-all"
		>
			{theme === 'light' ? <Moon/> : <Sun/>}
		</button>
    );
};