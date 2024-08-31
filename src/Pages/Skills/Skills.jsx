import React from "react";
import "./Skills.css";
import Html from "../../assets/Html.png";
import Css from "../../assets/Css.png";
import Js from "../../assets/Js.png";
import Reactt from "../../assets/Reactt.png";
import Reactredux from "../../assets/Reactredux.png";
import Reactrouter from "../../assets/Reactrouter.png";
import Tailwind from "../../assets/Tailwind.png";
import Netlify from "../../assets/Netlify.png";
import Vscode from "../../assets/Vscode.png";
import Git from "../../assets/Git.png";
import GitHub from "../../assets/GitHub.png";
import Bootstrap from "../../assets/Bootstrap.png";
import Gsap from "../../assets/Gsap.png";
import Locomotive from "../../assets/Locomotive.png";
import HookForm from "../../assets/HookForm.png";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiNetlify } from "react-icons/si";


function Skills() {
  return (
    <section id="skills">
      <div className="myskills">
        <div className="skillswrapper">
          <div className="core">
            <h1>Core Frontend Skills:</h1>
            <div className="cnt">
              <div className="first">
              <IoLogoHtml5 className="icons" />
              </div>
              <div className="second">
              <IoLogoCss3  className="icons" />
              </div>
              <div className="third">
              <FaJs className="icons" />
              </div>
            </div>
          </div>
          <div className="csslib">
            <h1>CSS Frameworks and Libraries:</h1>
            <div className="cnt">
              <div className="first">
              <SiTailwindcss className="icons" />
              </div>
              <div className="second">
              <DiBootstrap className="icons" />
              </div>
            </div>
          </div>
          <div className="react">
            <h1>React Ecosystem:</h1>
            <div className="cnt">
              <div className="first">
              <RiReactjsLine className="icons" />
              </div>
              <div className="second">
              <SiReactrouter className="icons" />
              </div>
              <div className="third">
              <TbBrandRedux className="icons" />
              </div>
              <div className="four">
              <SiReacthookform className="icons" />
              </div>
            </div>
          </div>
          <div className="version">
            <h1>Development, Version Control and Deployment:</h1>
            <div className="cnt">
              <div className="first">
              <VscVscodeInsiders className="icons" />
              </div>
              <div className="second">
              <FaGitAlt className="icons" />
              </div>
              <div className="third">
              <IoLogoGithub className="icons" />
              </div>
              <div className="four">
              <SiNetlify className="icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
