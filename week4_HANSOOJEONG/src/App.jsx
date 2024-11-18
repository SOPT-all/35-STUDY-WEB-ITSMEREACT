import { useState } from "react";
import UpdateingObjects from "./components/UpdatingObjects";
import MovingDot from "./components/MovingDot";
import BucketList from "./components/BucketList";

function App() {
  // 버튼 클릭에 따른 상태 설정
  const [selectedComponent, setSelectedComponent] = useState("UpdateingObjects");

  // 각 버튼 클릭 시 상태 업데이트
  const handleClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <>
      <h2 style={styles.title}>4주차 실습</h2>
      <div style={styles.container}>
        <div style={styles.buttonContainer}>
          <button onClick={() => handleClick("UpdateingObjects")}>Updating Objects</button>
          <button onClick={() => handleClick("MovingDot")}>Moving Dot</button>
          <button onClick={() => handleClick("BucketList")}>Bucket List</button>
        </div>

        <div style={styles.content}>
          {selectedComponent === "UpdateingObjects" && <UpdateingObjects />}
          {selectedComponent === "MovingDot" && <MovingDot />}
          {selectedComponent === "BucketList" && <BucketList />}
        </div>
      </div>
    </>
  );
}

const styles = {
  title :{
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  content: {
    textAlign: "center",
    padding: "20px",
    border: "2px solid #ccc",
    backgroundColor: "#fff",
    width: "80%",
    maxWidth: "600px",
  },
};

export default App;
