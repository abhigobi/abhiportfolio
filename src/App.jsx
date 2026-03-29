import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      {/* <section id="about" className="section">
        <h1>About</h1>
      </section> */}

      {/* <section id="projects" className="section">
        <h1>Projects</h1>
      </section> */}

      {/* <section id="skills" className="section">
        <h1>Skills</h1>
      </section> */}

      {/* <section id="contact" className="section">
        <h1>Contact</h1>
      </section> */}
    </>
  );
}

export default App;