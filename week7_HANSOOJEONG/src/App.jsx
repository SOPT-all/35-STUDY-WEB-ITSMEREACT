import { useState } from "react";
import LifecycleEffects from "./components/LifecycleEffects";
import NotNeedEffect from "./components/NotNeedEffect";
import SynchronizingEffects from "./components/SynchronizingEffects";

function App() {
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleShowComponent = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div>
      <h3>7주차 나리스</h3>

      <button onClick={() => handleShowComponent("LifecycleEffects")}>
        Show LifecycleEffects
      </button>
      <button onClick={() => handleShowComponent("NotNeedEffect")}>
        Show NotNeedEffect
      </button>
      <button onClick={() => handleShowComponent("SynchronizingEffects")}>
        Show SynchronizingEffects
      </button>

      {currentComponent === "LifecycleEffects" && <LifecycleEffects />}
      {currentComponent === "NotNeedEffect" && <NotNeedEffect />}
      {currentComponent === "SynchronizingEffects" && <SynchronizingEffects />}
    </div>
  );
}

export default App;
