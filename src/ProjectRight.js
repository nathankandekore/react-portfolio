import React from "react";
// import Betaminds from "./assets/betaminds.png";
// import Data from "./Data";

export default function ProjectRight(props) {
  // console.log(props);
  //set up state for background colour

  return (
    <>
      <div className="project-container">
        <section className="project-info">
          <div className="project-text">
            <h1>
              Project Name: <strong>{props.name}</strong>
            </h1>
            <h4>Built with: </h4>
            <h4>{props.tech}</h4>
            <br />
            <h4>{props.about}</h4>

            {/* data from mapped objected here */}
          </div>
        </section>
        <section className="project-view">
          <div className="project-card">
            <div className="project-image-frame">
              <img src={props.image} alt="project" />
            </div>
            <a href={props.link} target="_blank" rel="noreferrer">
              view project
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
