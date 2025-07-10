// Home.jsx
import { Helmet } from "react-helmet";
import Hero from "../components/section/Hero";
import Skills from "../components/section/Skills";
import Projects from "../components/section/Projects";
import About from "../components/section/About";
import Contact from "../components/section/Contact";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Aadarsh | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Explore Aadarsh’s full stack projects, skills, blogs and research papers. Built with React, Node.js, and MongoDB."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, MERN, React, Portfolio, Aadarsh Kumar"
        />
      </Helmet>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
