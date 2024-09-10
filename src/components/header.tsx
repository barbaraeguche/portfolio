'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { navLinks } from "@/lib/data";

export default function Header() {
    const [currentHash, setCurrentHash] = useState<string>('');
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);
    
    useEffect(() => {
        setCurrentHash(window.location.hash);
        
        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => entry.isIntersecting && setCurrentHash(`#${entry.target.id}`));
        }, { root: null, rootMargin: '0px', threshold: 0.5 });
        
        // observe all the sections
        sectionsRef.current = navLinks.map(({ href }) => document.querySelector(href));
        sectionsRef.current.forEach(section => section && observer.observe(section));
        
        // cleanup observer on unmount
        return () => sectionsRef.current.forEach(section => section && observer.unobserve(section));
    }, []);
    
    return (
        <header className="sticky top-0 bg-transparent z-50 backdrop-blur-3xl flex flex-col gap-y-5 px-12 py-4 mb-by-section text-mocha
                md:flex-row md:justify-between md:items-center dark:text-cream transition"
        >
            <h3 className="font-cursive text-3xl tracking-[30%] text-center">barbara</h3>
            <nav className="xsm:px-6 md:px-0 flex justify-between md:gap-x-12 lg:gap-x-24">
                {navLinks.map(({ icon: Icon, name, href }) => (
                    <Link key={href} href={href} className={`relative ${currentHash === href && 'border-b-2 border-b-lm-border'}`}>
                        <Icon className="block xsm:hidden mb-1" title={name}/>
                        <span className="hidden xsm:block">{name}</span>
                    </Link>
                ))}
            </nav>
        </header>
    );
};