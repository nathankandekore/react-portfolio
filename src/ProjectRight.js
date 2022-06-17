import React from "react";
// import Data from "./Data";
// import data from "data";

export default function ProjectRight() {
  return (
    <>
      <div className="project-container">
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
        <section className="project-view">
          <div className="background-cover">
            <div className="project-text">
              <h1>view project</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
