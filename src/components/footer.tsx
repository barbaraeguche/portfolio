'use client';
import { socials } from '@/lib/data';

export default function Footer() {
    return (
        <footer id="footer" className="flex flex-col-reverse xsm:flex-row justify-center items-center space-x-6
                            text-mocha dark:text-cream mb-6">
            <p className="flex justify-center items-center">
                <span className="text-3xl mr-1">&copy;</span>
                {(new Date()).getFullYear()} Barbara. All Rights Reserved.
            </p>
            <span className="inline-flex space-x-3">
                {socials.map(({icon: Icon, socialUrl, name}) => (
                    <a key={socialUrl} href={socialUrl} target="_" title={name} className="text-2xl" download={name === 'résumé'}>
                        {<Icon/>}
                    </a>
                ))}
            </span>
        </footer>
    );
};