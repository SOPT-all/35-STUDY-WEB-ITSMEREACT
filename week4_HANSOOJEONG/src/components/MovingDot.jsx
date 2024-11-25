import { useState, useRef } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const frameRef = useRef(null); 
  const targetPosition = useRef({ x: 0, y: 0 });
  const updatePosition = () => {
    setPosition(prevPosition => {
      const x = Math.round(prevPosition.x + (targetPosition.current.x - prevPosition.x) * 0.1); // 0.1만큼 부드럽게 이동
      const y = Math.round(prevPosition.y + (targetPosition.current.y - prevPosition.y) * 0.1); // 0.1만큼 부드럽게 이동
      return { x, y };
    });

    frameRef.current = requestAnimationFrame(updatePosition); // 다음 애니메이션 프레임 요청
  };

  const handlePointerMove = (e) => {
    const container = e.target.getBoundingClientRect();
    targetPosition.current = {
      x: e.clientX - container.left,
      y: e.clientY - container.top,
    };
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(updatePosition);
    }
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      style={{
        position: 'relative',
        width: '400px',
        height: '400px',
        border: '1px solid #ccc',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          left: position.x - 10,
          top: position.y - 10, 
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
