import "./App.css";
import Name from "./Name";
import About from "./About";
import ProjectRight from "./ProjectRight";
import Data from "./Data";
import ProjectTemplate from "./ProjectTemplate";

function App() {
  // renderProjects = Data.map((project) => {
  //   <ProjectTemplate />;
  // });

  return (
    <>
      <Name />
      <About />
      <ProjectRight />
      {/* <Data /> */}
    </>
  );
}

export default App;
