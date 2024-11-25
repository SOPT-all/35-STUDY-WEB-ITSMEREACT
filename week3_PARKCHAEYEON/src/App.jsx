const App = () => {
  const handleClick = (e) => {
    alert(`클릭된 요소: ${e.target.tagName}`);
  };

  const handleCapture = (e) => {
    alert(`캡처된 요소: ${e.target.tagName}`);
  };

  const handleClickButton = (e) => {
    if (e.target.tagName === "BUTTON") {
      alert("버튼이 클릭되었습니다!");
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        style={{ padding: "20px", border: "1px solid black" }}
      >
        <div style={{ padding: "20px", border: "1px solid blue" }}>
          <button>버튼 클릭</button>
        </div>
      </div>

      <div
        onClickCapture={handleCapture}
        style={{ padding: "20px", border: "1px solid black" }}
      >
        <div style={{ padding: "20px", border: "1px solid blue" }}>
          <button>버튼 클릭</button>
        </div>
      </div>

      <div
        onClick={handleClickButton}
        style={{ padding: "20px", border: "1px solid black" }}
      >
        <div style={{ padding: "20px", border: "1px solid blue" }}>
          <button>버튼 1</button>
          <button>버튼 2</button>
          <button>버튼 3</button>
        </div>
      </div>
    </>
  );
};

export default App;
