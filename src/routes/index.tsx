import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Srija Chodisetti — Full Stack Developer & Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Chodisetti Siva Chakra Satya Sai Srija — Full Stack Developer, Data Analyst and tech enthusiast specializing in cloud, AI and software development.",
      },
      { property: "og:title", content: "Srija Chodisetti — Full Stack Developer & Data Analyst" },
      { property: "og:description", content: "Building innovative digital solutions with cloud, AI and modern web tech." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
