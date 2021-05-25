import Welcome from "./components/Welcome";
//import AnimatedSocials from "./components/AnimatedSocials";
import Socials from "./components/Socials";
import RecentProjects from "./components/RecentProjects";
import Files from "./components/Files";

function App() {
  return (
    <>
      <div className="flex-parent">
        <div className="left-column">
          <Welcome />
          <Socials />
        </div>
        <div className="right-column">
          <RecentProjects />
          <Files />
        </div>
      </div>
    </>
  );
}

export default App;
