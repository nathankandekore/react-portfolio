import React from "react";
import Betaminds from "./assets/betaminds.png";
// import Data from "./Data";

export default function ProjectRight(props) {
  // console.log(props);
  //set up state for background colour

  return (
    <>
      <div className="project-container">
        <section className="project-view">
          <div className="project-card-left">
            <div className="project-image-frame">
              <img src={Betaminds} alt="Betaminds" />
            </div>
            <a href="#">view project</a>
          </div>
        </section>
        <section className="project-info">
          <div className="project-text">
            <h1>
              Project Name: <strong>Betaminds</strong>
            </h1>
            <h4>Built with: </h4>
            <h4>HTML, CSS, React</h4>

            {/* data from mapped objected here */}
          </div>
        </section>
      </div>
    </>
  );
}
