'use client';
import SectionHeader from './section-header';
import { currentStack } from '@/lib/data';

export default function Stack() {
    return (
        <section id="stack"
                 className="flex flex-col gap-y-10 mx-auto px-8 max-w-[50rem] mb-each-section text-mocha
                 dark:text-cream transition"
        >
            <SectionHeader>my skills</SectionHeader>
            <article className="flex flex-wrap justify-center gap-2 will-change-transform">
                {currentStack.map((stack, index) => (
                    <span key={index}
                          className="border border-lm-border px-3 py-2 rounded-[10px] drop-shadow-lm-card-shadow
                          bg-lm-card-bg dark:text-dm-card-bg dark:border-dm-border"
                    >
                        {stack}
                    </span>
                ))}
            </article>
        </section>
    );
};