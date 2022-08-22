import React from "react";

export default function ProjectRight(props) {
  // console.log(props);
  //set up state for background colour

  return (
    <>
      <div className="project-container">
        <section className="project-view">
          <div className="project-card-left">
            <div className="project-image-frame">
              <img src={props.image} alt="Betaminds" />
            </div>
            <a href={props.link} target="_blank" rel="noreferrer">
              view project
            </a>
          </div>
        </section>
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
      </div>
    </>
  );
}
