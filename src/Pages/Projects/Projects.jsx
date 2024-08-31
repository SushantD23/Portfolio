import React from "react";
import "./Projects.css";
import BG from "../../assets/BG.jpg";
import blog from "../../assets/blog.jpg";

function Projects() {
  return (
    <section id="projects">
      <div className="txt">
        <h1>Projects</h1>
      </div>
      <div className="project-cnt">
        <div className="proj">
          <img src={BG} alt="Bhagavad_Gita_Image" />
          <div className="projtxt">
            <a
              href="https://bhagavadgeet.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>
                Project Bhagavad Gita <i className="ri-arrow-right-up-line"></i>
              </h1>
            </a>

            <h2>
              Technologies used:
              <span> </span>
              <span>
                Html, Css, JavaScript, React, React-router, RTK(Redux-Toolkit),
                React-Redux
              </span>
            </h2>
            <p>
              Project Bhagavad Gita is a web application designed to offer users
              seamless access to the verses and chapters of the Bhagavad Gita.
              The application features a clean yet visually rich user interface
              that enhances user experience. It integrates with an API to
              dynamically render content based on user interactions and
              conditions. By utilizing state management, the app efficiently
              tracks and updates the current status, ensuring smooth navigation
              and functionality. It also includes data filtering capabilities to
              present the content in a more readable and accessible manner,
              making it easier for users to explore and understand the teachings
              of the Bhagavad Gita.
            </p>
          </div>
        </div>
        <div className="proj">
          <img src={blog} alt="Bhagavad_Gita_Image" />
          <div className="projtxt">
            <a
              href="https://blog-poster.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>
                Blog Poster <i className="ri-arrow-right-up-line"></i>
              </h1>
            </a>
            <h2>
              Technologies used:
              <span>
                Html, Css, Tailwind Css, JavaScript, React, React-router,
                RTK(Redux-Toolkit), React-Redux, Appwrite
              </span>
            </h2>
            <p>
              Blog Poster is a web application designed for creating, editing,
              and managing blog content with ease. Built with React and powered
              by Appwrite, it offers secure user authentication, real-time
              database management, and efficient file storage. The app features
              a rich text editor for seamless content creation, along with
              category tagging and search functionality for better content
              organization and discoverability. By leveraging Appwrite’s robust
              backend services, Blog Poster delivers a responsive and reliable
              blogging platform suited for both personal and professional use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
