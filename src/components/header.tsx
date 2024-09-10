'use client';
import Link from 'next/link';
import { navLinks } from "@/lib/data";

export default function Header() {
    return (
        <header className="flex flex-col gap-y-5 px-12 py-4 mb-each-section text-mocha
                md:flex-row md:justify-between md:items-center
                dark:text-cream transition"
        >
            <h3 className="font-cursive text-3xl tracking-[30%] text-center">barbara</h3>
            <nav className="xsm:px-6 md:px-0 flex justify-between md:gap-x-12 lg:gap-x-24">
                {navLinks.map(({ icon: Icon, name, href }) => (
                    <Link key={href} href={href}>
                        <Icon className="block xsm:hidden" title={name}/>
                        <span className="hidden xsm:block">{name}</span>
                    </Link>
                ))}
            </nav>
        </header>
    );
};
// sticky top-[1px] ... py-[6px]
{/* make header sticky and add bg color */}