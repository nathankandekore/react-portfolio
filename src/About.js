import React from "react";
import jslogo from "./assets/jslogo.svg";
import csslogo from "./assets/csslogo.svg";
import html_logo from "./assets/html-logo.svg";
import reactlogo from "./assets/reactlogo.svg";
import githublogo from "./assets/githublogo.svg";
import linkedinlogo from "./assets/linkedinlogo.svg";
import twitterlogo from "./assets/twitterlogo.svg";
import javalogo from "./assets/javalogo.svg";
import pythonlogo from "./assets/pythonlogo.svg";
import gitlogo from "./assets/gitlogo.svg";

export default function About() {
  return (
    <>
      <div className="about-container">
        <section className="skills">
          <div className="icons-container">
            <div className="icon-container">
              <a
                className="icon-container"
                href="https://github.com/nathankandekore"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githublogo} alt="github-logo" />
              </a>
            </div>
            <div className="icon-container">
              <a
                className="icon-container"
                href="https://www.linkedin.com/in/nathankandekore/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinlogo} alt="linkedin-logo" />
              </a>
            </div>
            <div className="icon-container">
              <a
                className="icon-container"
                href="https://twitter.com/NathanKandekore"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitterlogo} alt="twitter-logo" />
              </a>
            </div>
          </div>
          <div className="icons-container">
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
            <div className="icon-container">
              <img src={pythonlogo} alt="python-logo" />
            </div>
            <div className="icon-container">
              <img src={javalogo} alt="java-logo" />
            </div>
            <div className="icon-container">
              <img src={gitlogo} alt="git-logo" />
            </div>
          </div>
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
            <div className="codewars-badge-container">
              <img
                className="codewars-badge"
                src="https://www.codewars.com/users/Nathan%20Kandekore/badges/micro"
                alt="codewars-badge"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
