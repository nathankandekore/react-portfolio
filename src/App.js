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
        about="Betaminds are a Community Interest Company based in East London. They wanted a webpage to promote their organisation for funders. The challenge with this project was to focus the client on the user experience and what call to action they wanted to generate. Conversely the aim was to share information about the organisation in a way that was not overwhelming and did not distract from the call to action; namely making a donation. I used the opportunity to experiment with React Router. "
      />
      <ProjectLeft
        name="Group Soup"
        tech="React"
        image={Groupsoup}
        link="https://amazing-cajeta-273e87.netlify.app/"
        about="I was in a meeting with colleagues, when I noticed that the Manager was using a the stopwatch app on her mobile phone, a pen and paper, and then would later type her notes to send to the presenter. I thought this could me much more efficient; Groupsoup was born. It was built using React. I explored several Packages whilst building this project, considering what functionality might be most useful to the user. 
"
      />
      <ProjectRight
        name="Syxxshoots"
        tech="Javascript"
        image={Syxxshoots}
        link="https://tangerine-halva-e410de.netlify.app/"
        about="Syxxshoots is a brand created by a hobbyist Photographer. He was predominantly using Instagram to showcase his work. The mandate was clear that the quality of his pictures was of the upmost importance. There was a compromise to be found between the quality of the pictures and the impact on loading time."
      />
    </>
  );
}

export default App;
