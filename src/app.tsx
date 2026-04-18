import Decorations from "@/components/decorations";
import Layout from "@/components/layout";
import About from "@/pages/about";

export default function App() {
  return (
    <>
      <Decorations/>
      <Layout>
        <About/>
      </Layout>
    </>
  );
}