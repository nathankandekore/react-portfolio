import React from "react";
// import Data from "./Data";

const ProjectTemplate = (props) => {
  //create a backgound colour class then apply it to a section dependent on...

  // console.log(props);
  return (
    <>
      <div className="project-container">
        <section className="project-info">
          <div className="project-text">
            <h1>
              Project Name: <strong>test</strong>
            </h1>
            <h4>Built with: </h4>
            <h4>HTML, CSS, React</h4>
          </div>
        </section>
        <section className="project-view">
          <div className="project-card">
            <div className="project-hidden">
              <h1>view project</h1>
            </div>
            <div className="project-shown"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectTemplate;
