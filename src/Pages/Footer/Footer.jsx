import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div id="links">
        <a
          href="https://www.linkedin.com/in/sushant-dwivedi-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="go" />
        </a>
        <a
          href="https://github.com/SushantD23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="go" />
        </a>
        <a href="#">
          <FaXTwitter className="go" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
