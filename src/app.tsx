import { Analytics } from "@vercel/analytics/react";
import Decorations from "@/components/decorations";
import Layout from "@/components/layout";
import About from "@/sections/about";
import Experience from "@/sections/experience";
import Projects from "@/sections/projects";

export default function App() {
  return (
    <>
      <Decorations/>
      <Layout>
        <About/>
        <Experience/>
        <Projects/>
      </Layout>
      <Analytics />
    </>
  );
}