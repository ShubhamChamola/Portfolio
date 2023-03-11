import Hero from "../layouts/hero";
import About from "../layouts/about";
import Skills from "../layouts/skills";
import Projects from "../layouts/projects";
import Contact from "../layouts/contact";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
