import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      {/* <Terminal /> */}
      <Contact />
      <Footer />
      {/* Baki sections yahan aayenge */}
    </>
  );
}