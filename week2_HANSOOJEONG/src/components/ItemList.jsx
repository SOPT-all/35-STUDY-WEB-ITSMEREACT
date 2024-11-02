import React, { useState } from "react";
import { ListContainer, Title, AddItemFormContainer, ItemListContainer, ListItem } from './ItemListStyle';

// 개별 아이템 컴포넌트
function Item({ name, onDelete }) {
  return (
    <ListItem>
      {name} <button onClick={onDelete}>삭제</button>
    </ListItem>
  );
}

// 아이템 추가 컴포넌트
function AddItemForm({ onAdd }) {
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    if (newItem.trim() !== "") {
      onAdd(newItem);
      setNewItem(""); // 입력 필드 초기화
    }
  };

  return (
    <AddItemFormContainer>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="새로운 물건을 입력하세요"
      />
      <button onClick={handleAdd}>추가</button>
    </AddItemFormContainer>
  );
}

// 아이템 목록 컴포넌트
function ItemList() {
  const [items, setItems] = useState(["테이프", "상자", "풍선"]);

  // 아이템 추가 함수
  const addItem = (item) => {
    setItems([...items, item]);
  };

  // 아이템 삭제 함수
  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <ListContainer>
      <Title>물건 목록</Title>
      <AddItemForm onAdd={addItem} />
      <ItemListContainer>
        {items.map((item, index) => (
          <Item key={item} name={item} onDelete={() => deleteItem(index)} />
        ))}
      </ItemListContainer>
    </ListContainer>
  );
}

export default ItemList;
