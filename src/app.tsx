import { Analytics } from "@vercel/analytics/react";
import Decorations from "@/components/decorations";
import Layout from "@/components/layout";
import About from "@/pages/about";
import Experience from "@/pages/experience";
import Projects from "@/pages/projects";

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