import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Projects />
    </main>
  );
}