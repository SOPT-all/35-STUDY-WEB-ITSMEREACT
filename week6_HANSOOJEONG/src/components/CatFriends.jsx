import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function CatFriends() {
  const selectedRef = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <>
      <nav>
        <button onClick={() => {
          flushSync(() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
          });
          selectedRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }}>
          Next
        </button>
      </nav>
      <div>
        <ul style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={index === i ? selectedRef : null}
              style={{ flexShrink: 0, margin: '0 10px', display: 'inline-block' }}
            >
              <div
                className={index === i ? 'active' : ''}
                style={{
                  position: 'relative',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  width: 'auto',
                  height: '200px',
                  boxShadow: index === i ? '0 0 15px rgba(0, 0, 0, 0.8)' : 'none',
                }}
              >
                <img
                  src={`/images/cat${cat.id}.jpg`}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  alt={`Cat #${cat.id}`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

    </>
  );
}

const catList = [];
for (let i = 1; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `/images/cat${i}.jpg`
  });
}
