import Decorations from "@/components/decorations";
import Layout from "@/components/layout";
import About from "@/pages/about";
import Experience from "@/pages/experience";

export default function App() {
  return (
    <>
      <Decorations/>
      <Layout>
        <About/>
        <Experience/>
      </Layout>
    </>
  );
}