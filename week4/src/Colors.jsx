import { useState } from "react";

const Colors = () => {
  const [colors, setColors] = useState(["red", "blue", "green"]);

  console.log("렌더링");

  const changeColor = () => {
    let copyColors = colors;

    copyColors[0] = "pink";

    setColors(copyColors);

    console.log(copyColors);
    console.log(colors);

    // const copyColors = [...colors];
    // copyColors[0] = "pink";

    // // 상태 업데이트
    // setColors(copyColors);

    // console.log(copyColors);
    // console.log(colors);
  };

  return (
    <>
      <button onClick={changeColor}>Click</button>;
      <ul>
        {colors.map((data, idx) => {
          return <li key={idx}>{data}</li>;
        })}
      </ul>
    </>
  );
};

export default Colors;
