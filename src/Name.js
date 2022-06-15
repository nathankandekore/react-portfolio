import React from "react";
import Pic from "./assets/nathanlarge.jpg";

export default function Name() {
  return (
    <div className="intro-screen">
      <section className="intro-text">
        <div className="intro-text-centering-container">
          <h1>
            Hi, my name is <br />
            <strong>Nathan</strong>
          </h1>
          <div className="job-description">
            <h3>Software Developer</h3>
          </div>
        </div>
      </section>
      <section className="intro-pic">
        <img className="nathan-img" src={Pic} alt="nathan" />
      </section>
    </div>
  );
}
