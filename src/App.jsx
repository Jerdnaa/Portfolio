import { useRef, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
  const [language, setLanguage] = useState("en");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToHome = () => homeRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToProject = () => projectRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToProject={scrollToProject}
        scrollToContact={scrollToContact}
        language={language}
        setLanguage={setLanguage}
      />
      <Home refProp={homeRef} language={language} />
      <About refProp={aboutRef} language={language} />
      <Projects refProp={projectRef} language={language} />
      <Contact refProp={contactRef} language={language} />
    </>
  );
}

export default App;
