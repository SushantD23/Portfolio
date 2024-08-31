import React from "react";
import "./Header.css";

function Header() {
  const handleScroll = (id) => {
    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      behavior: "smooth",
    });
    window.history.pushState(null, null, `#${id}`);
  };

  return (
    <header>
      <h1>Sushant</h1>
      <nav>
        <div className="home">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("home");
            }}
          >
            <h3>About me</h3>
          </a>
        </div>
        <div className="skills">
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("skills");
            }}
          >
            <h3>Skills</h3>
          </a>
        </div>
        <div className="projects">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("projects");
            }}
          >
            <h3>Projects</h3>
          </a>
        </div>
        <div className="contact">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("contact");
            }}
          >
            <h3>Contact</h3>
          </a>
        </div>
      </nav>
      {/* <div className="icon">
        <h1><i class="ri-sun-fill"></i></h1>
      </div> */}
    </header>
  );
}

export default Header;
