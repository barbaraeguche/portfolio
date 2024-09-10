import About from '@/components/about';
import Experience from '@/components/experience';
import Stack from '@/components/stack';
import Projects from '@/components/projects';
import Contact from '@/components/contact';

export default function Home() {
    return (
        <main>
            <About/>
            <Experience/>
            <Stack/>
            <Projects/>
            <Contact/>
        </main>
    );
};