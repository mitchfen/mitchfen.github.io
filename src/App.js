import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

function App() {
  return (
    <>
      <div className="flex-parent">
        <div className="left-column">
          <LeftColumn />
        </div>
        <div className="right-column">
          <RightColumn />
        </div>
      </div>
    </>
  );
}

export default App;
