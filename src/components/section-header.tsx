'use client';
import { ReactNode } from 'react';

export default function SectionHeader({ children }: { children: ReactNode }) {
	return (
		<h2 className="font-cursive text-center text-6xl">{children}</h2>
	);
};