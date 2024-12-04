import { useState, useEffect } from "react";

export default function FunctionComponent() {
  const [color, setColor] = useState();

  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    console.log("component is loaded");

    return () => {
      console.log("component is unloaded");
    };
  }, []); // 빈 배열로 useEffect가 컴포넌트가 마운트될 때 한 번만 실행, 언마운트 시 클린업 실행

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: "20rem",
            height: "10rem",
            backgroundColor: color || "#fff",
            border: "solid 1px #ccc",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <button
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            onClick={() => changeColor("#f00")}
          >
            Red
          </button>
          <button
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            onClick={() => changeColor("#000")}
          >
            Black
          </button>
          <button
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            onClick={() => changeColor("#0f0")}
          >
            Green
          </button>
          <button
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            onClick={() => changeColor("#f0f")}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}
