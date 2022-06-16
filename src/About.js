import React from "react";
// import Codewars from "https://www.codewars.com/users/Nathan%20Kandekore/badges/small";
import jslogo from "./assets/jslogo.svg";
import csslogo from "./assets/csslogo.svg";
import html_logo from "./assets/html-logo.svg";
import reactlogo from "./assets/reactlogo.svg";

export default function About() {
  return (
    <>
      <div className="about-container">
        <section className="skills">
          <div className="socials-icons">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="skills-icons">
            <div className="icon-container">
              <img src={html_logo} alt="html-logo" />
            </div>
            <div className="icon-container">
              <img src={csslogo} alt="css-logo" />
            </div>
            <div className="icon-container">
              <img src={jslogo} alt="js-logo" />
            </div>
            <div className="icon-container">
              <img src={reactlogo} alt="react-logo" />
            </div>
          </div>
          {/* <img src={Codewars} alt="codewars-badge" /> */}
        </section>
        <section className="about-me">
          <div className="about-me-text-container">
            <h1>
              <strong>About me</strong>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              pulvinar sem, id consectetur augue. Sed tempus, dolor eu aliquet
              faucibus, est magna consequat leo, at interdum mi sapien quis
              risus. Quisque ac commodo arcu, vel efficitur sem. Integer semper
              elementum commodo. Nulla hendrerit erat erat, quis fringilla dolor
              eleifend a. Aliquam leo orci, fermentum id nisi sed, iaculis
              iaculis augue. Praesent finibus, dui a accumsan pharetra, dui
              tortor mattis tortor, at egestas nulla dolor eget libero.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
