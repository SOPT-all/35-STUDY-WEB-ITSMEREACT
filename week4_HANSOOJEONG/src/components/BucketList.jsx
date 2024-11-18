import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);
  const [newItemTitle, setNewItemTitle] = useState('');  // 제목 입력 상태

  // 공통된 상태 토글 함수
  function handleToggleList(artworkId, nextSeen, listSetter) {
    listSetter(prevList =>
      prevList.map(artwork =>
        artwork.id === artworkId
          ? { ...artwork, seen: nextSeen }
          : artwork
      )
    );
  }

  // 항목 추가 함수 (아이디 자동 증가)
  function handleAddItem(listSetter) {
    if (!newItemTitle) {
      alert('Please enter a title for the new artwork.');
      return;
    }

    const newItem = {
      id: nextId++, // 새로운 아이디
      title: newItemTitle,
      seen: false,
    };

    listSetter(prevList => [...prevList, newItem]);
    setNewItemTitle('');  // 제목 입력 필드 초기화
  }

  return (
    <div style={{ width: '500px', margin: '0 auto' }}>
      <h1>Art Bucket List</h1>

      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={(id, seen) => handleToggleList(id, seen, setMyList)}
      />
      {/* 제목 입력 및 추가 버튼 */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter artwork title"
          value={newItemTitle}
          onChange={(e) => setNewItemTitle(e.target.value)}
          style={{ padding: '8px', marginRight: '10px', width: '70%' }}
        />
        <button onClick={() => handleAddItem(setMyList)} style={{ padding: '8px 16px' }}>
          Add Artwork
        </button>
      </div>

      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={(id, seen) => handleToggleList(id, seen, setYourList)}
      />
    </div>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {artworks.map(artwork => (
        <li key={artwork.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <label style={{ flex: 1 }}>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => onToggle(artwork.id, e.target.checked)}
            />
            <span style={{ marginLeft: '10px' }}>{artwork.title}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
