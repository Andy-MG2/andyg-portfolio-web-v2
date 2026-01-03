
import AboutMe from "@/components/AboutMe/AboutMe";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Navbar from "@/components/Navbar";

export default function Home() {
  
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section id="about" className = "scroll-mt-16 pt-55 pb-45 ">
        <AboutMe />
      </section>
      <section  className = "scroll-mt-5" id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </>
  );
}
