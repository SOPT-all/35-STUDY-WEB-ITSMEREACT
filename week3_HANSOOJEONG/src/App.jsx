import React, { useState } from 'react';
import Responding from './conponents/Responding';
import ComponentsMemory from './conponents/ComponentsMemory';
import RenderCommit from './conponents/RenderCommit';
import Snapshot from './conponents/Snapshot';
import './App.css';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className="app-container">
      <div className="button-container">
        <button onClick={() => handleClick('Responding')} className="app-button">이벤트에 응답하기</button>
        <button onClick={() => handleClick('ComponentsMemory')} className="app-button">State: 컴포넌트의 기억 저장소</button>
        <button onClick={() => handleClick('RenderCommit')} className="app-button">렌더링 그리고 커밋</button>
        <button onClick={() => handleClick('Snapshot')} className="app-button">스냅샷으로서의 state</button>
      </div>

      <div className="component-container">
        {currentComponent === 'Responding' && <Responding />}
        {currentComponent === 'ComponentsMemory' && <ComponentsMemory />}
        {currentComponent === 'RenderCommit' && <RenderCommit />}
        {currentComponent === 'Snapshot' && <Snapshot />}
      </div>
    </div>
  );
};


export default App;
