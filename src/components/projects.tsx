'use client';
import SectionHeader from './section-header';
import { FiGithub } from 'react-icons/fi';
import { projects } from '@/lib/data';

export default function Projects() {
    return (
        <section id="projects"
                 className="flex flex-col gap-y-14 px-8 mb-by-section text-mocha
        		 dark:text-cream transition scroll-mt-by-section"
        >
            <SectionHeader>projects</SectionHeader>
            <div className="grid grid-cols-1 gap-6 mx-auto w-[85%] max-w-[450px]
                 md:grid-cols-2 md:w-[95%] md:max-w-[870px]"
            >
                {projects.map(({ projIcon: Icon, gitUrl, title, description, tags }) => (
                    <div key={gitUrl} className="flex flex-col p-5 gap-y-5 rounded-[10px] border border-lm-border
                                      bg-lm-card-bg drop-shadow-lm-card-shadow dark:bg-dm-card-bg dark:drop-shadow-dm-card-shadow
                                      hover:animate-shake-card transition-transform will-change-transform motion-reduce:animate-none"
                    >
                        <div className="flex justify-between">
                            <span>{<Icon/>}</span>
                            <a href={gitUrl} target="_" className="text-2xl">
                                {<FiGithub/>}
                            </a>
                        </div>
                        <p className="font-semibold text-[18px]">{title}</p>
                        <p className="text-mocha-light text-justify dark:text-cream-light">{description}</p>
                        <div className="flex flex-wrap gap-x-2 gap-y-1">
                            {tags.map((tag, index) => (
                                <span key={index}
                                      className="border italic px-2 rounded-full bg-cream-lighter border-lm-border text-mocha-lighter
                                      dark:bg-mocha-lighter dark:border-dm-border dark:text-cream-lighter"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};