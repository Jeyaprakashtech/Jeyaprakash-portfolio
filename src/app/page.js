import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
     
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
     
    </>
  );
}
