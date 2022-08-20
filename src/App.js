import "./App.css";
import Name from "./Name";
import About from "./About";
import ProjectRight from "./ProjectRight";
import ProjectLeft from "./ProjectLeft";
import Betaminds from "./assets/betaminds.png";
import Groupsoup from "./assets/groupsoup_screenshot.png";
import Syxxshoots from "./assets/syxxshoots_screenshot.png";

function App() {
  return (
    <>
      <Name />
      <About />
      <ProjectRight
        name="Betaminds"
        tech="React"
        image={Betaminds}
        link="https://laughing-pike-87c295.netlify.app/"
      />
      <ProjectLeft
        name="Group Soup"
        tech="React"
        image={Groupsoup}
        link="https://amazing-cajeta-273e87.netlify.app/"
      />
      <ProjectRight
        name="Syxxshoots"
        tech="Javascript"
        image={Syxxshoots}
        link="https://tangerine-halva-e410de.netlify.app/"
      />
    </>
  );
}

export default App;
