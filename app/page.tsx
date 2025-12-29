import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe/AboutMe";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section className = "pt-35">
        <AboutMe />
      </section>
      <section>
        <Skills/>
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <ContactMe />
      </section>
    </>
  );
}
