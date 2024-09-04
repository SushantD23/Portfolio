import React from "react";
import Prfl from "../../assets/Prfl.png";
import "./Home.css";
import Typewriter from "react-typewriter-effect";

function Home() {

  function openResume(){
    window.open('Resume.pdf', '_blank')
  }


  return (
    <section id="home">
      <div className="main">
        <div className="left">
          <div className="textcontent">
            {/* <div className="codeeffect">
              <code>
                <span style={{ color: "red" }}>Console</span>
                <span style={{ color: "black" }}>.</span>
                <span style={{ color: "blue" }}>log</span>
                <span style={{ color: "purple" }}>(</span>
                <span style={{ color: "green" }}>"</span>
              </code>
            </div> */}
            <div className="hello">
              <h1>Hello World...</h1>
            </div>
            <div className="type">
              <pre>
                <h3>I'm a, </h3>
              </pre>
              <Typewriter
                textStyle={{
                  fontFamily: "Moderustic",
                  color: "#294550",
                  fontWeight: 900,
                  fontSize: "4vw",
                }}
                startDelay={200}
                cursorColor="#5A7A7C"
                multiText={["Front-end ", "React Js ", "JS "]}
                multiTextDelay={1000}
                typeSpeed={50}
                deleteSpeed={50}
                multiTextLoop={true}
              />
            </div>
            <pre>
                <h1>DEVELOPER.</h1>
              </pre>
            <div className="lil">
              <p>
                Passionate Frontend Developer dedicated to crafting engaging and
                responsive web experiences with the strong foundation in{" "}
                <span style={{ color: "#DD4B25", fontWeight: "700" }}>
                  HTML
                </span>
                ,{" "}
                <span style={{ color: "#254BDD", fontWeight: "700" }}>CSS</span>
                ,{" "}
                <span style={{ color: "#EFD81D", fontWeight: "700" }}>
                  JavaScript
                </span>
                ,{" "}
                <span style={{ color: "#5ED3F3", fontWeight: "700" }}>
                  React
                </span>{" "}
                and <span>more</span>. In addition to my technical skills, I'm
                an advocate for clean code, best practices, and continuous
                learning. Whether it's optimizing performance, ensuring
                cross-browser compatibility, or integrating APIs.
              </p>
            </div>
            <div className="btn">
              <button onClick={()=> openResume()}>Resume</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="imgcnt">
            <img src={Prfl} alt="Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
