// //이벤트 핸들러 추가

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert('Playing!')}
//       onUploadImage={() => alert('Uploading!')}
//     />
//   );
// }

// function Toolbar({onPlayMovie, onUploadImage}){
//   return(
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function Button({onClick, children}){
//   return(
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// export default function Button() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

// // 이벤트 핸들러에서 props로 전달하기

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return (
//     <Button onClick={handlePlayClick}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton() {
//   return (
//     <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }

//이벤트 전파 
const ControlPanel = () => {
  return (
    <div
      onClick={() => {
        alert("<div>요소를 클릭했습니다!");
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation(); // 이벤트 전파 멈추기
          alert("Play 버튼을 클릭했습니다!");
        }}
      >
        ▶ Play
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert("Stop 버튼을 클릭했습니다!");
        }}
      >
        ▣ Stop
      </button>
    </div>
  );
};

export default ControlPanel;