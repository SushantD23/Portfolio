import {React, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";

function App() {
  const location = useLocation();
  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location.hash]);

  return (
    <>
      <Header />
      <main>
        <Home id = "home"/>
        <Skills id = "skills" />
        <Projects  id = "projects"/>
        <Contact id = "contact"/>
      </main>
      <Footer />
    </>
  );
}

export default App;
