import { useState } from "react";
import ControlledComponent from "./components/ControlledComponent";
import Accordion from "./components/FilterableList";
import UncontrolledComponent from "./components/UncontrolledComponent";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("Accordion");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Accordion":
        return <Accordion key="Accordion" />;
      case "Controlled":
        return <ControlledComponent key="Controlled" />;
      case "Uncontrolled":
        return <UncontrolledComponent key="Uncontrolled" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>5주차 나리스</h1>
      <div>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setSelectedComponent("Accordion")}
        >
          Accordion
        </button>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setSelectedComponent("Controlled")}
        >
          Controlled Component
        </button>
        <button onClick={() => setSelectedComponent("Uncontrolled")}>
          Uncontrolled Component
        </button>
      </div>

      <hr />
      <div>{renderComponent()}</div>
    </div>
  );
}

export default App;
