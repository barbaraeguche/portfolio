import SectionHeader from './section-header';
import Image from 'next/image';
import myPhoto from '../assets/me.jpeg';

export default function About() {
    return (
        <section id="about"
                 className="flex flex-col gap-y-10 mb-each-section text-mocha
                 md:items-center md:flex-row md:gap-y-0 md:mx-auto md:w-[80%]
                 md:space-x-10 md:max-w-[880px] lg:space-x-20 lg:max-w-[1050px]
                 dark:text-cream transition"
        >
            <Image src={myPhoto} alt="my image" className="mx-auto w-[200px] h-[269.23px] rounded-[75px] md:mx-0 border-2 border-mocha
                                              dark:border-cream"
            /> {/* add shadow and border */}
            <div className="flex flex-col gap-y-[20px]">
                <SectionHeader>who is she...</SectionHeader>
                <p className="mx-auto w-[80%] max-w-[480px] text-justify
                   md:mx-0 md:w-full md:max-w-full"
                >
                    I’m an aspiring ✨ <span className="font-bold">full-stack developer & designer</span> ✨ currently in my <span className="font-bold">third year at Concordia University</span>.
                    I have a passion for problem-solving and am eager to build innovative <span className="font-bold">web applications</span>. I’m also interested in DevOps and
                    cybersecurity 🔐, particularly in <span className="font-bold">network security</span> and <span className="font-bold">threat analysis</span>, both of which I find fascinating and
                    essential for modern development practices.
                    <br/><br/>
                    
                    In my free time, I enjoy cooking 🍲, going for a run 🏃🏾‍♀️, and spending quality time on picnic dates 🧺 with friends. These activities
                    keep me energized and inspired, allowing me to approach my work with a fresh perspective.
                    <br/><br/>
                    
                    Feel free to explore my portfolio to see my projects and experience!
                </p>
            </div>
        </section>
    );
};