import Hero from "../layouts/hero";
import About from "../layouts/about";
import Skills from "../layouts/skills";
import Projects from "../layouts/projects";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
};

export default Home;
