import React from "react";
import "./Contact.css";
import contact from "../../assets/contact.png";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "242e6050-e836-4235-8177-3b2a1f6cbd7e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };
  return (
    <section id="contact">
      <div className="contacttxt">
        <a
          href="https://www.linkedin.com/in/sushant-dwivedi-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>
            Let's Connect <i className="ri-arrow-right-up-line"></i>
          </h1>
        </a>
      </div>
      <div className="contactmdle">
        <img src={contact} alt="" />
        <div className="contactform">
          <form onSubmit={onSubmit}>
            <div className="fieldwrapper">
              <div className="name">
                <label for="fullname">Full Name </label> <br />
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  minlength="3"
                  pattern="^[a-zA-Z\s]+$"
                  title="Please enter a valid full name (letters and spaces only)"
                />{" "}
                <br />
                <br />
              </div>
              <div className="mail">
                <label for="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                />{" "}
                <br />
                <br />
              </div>
              <div className="cmt">
                <label for="comments">Comments</label>
                <br />
                <textarea
                  id="comments"
                  name="comments"
                  required
                  minlength="10"
                  maxlength="500"
                  placeholder="Enter your comments here..."
                />{" "}
                <br />
              </div>
              <div className="btns">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
