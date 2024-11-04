import styled from "styled-components";

// 전체 ItemList 스타일
export const ListContainer = styled.div`
  margin: 2rem;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 50rem;
`;

// 제목 스타일
export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

// 아이템 추가 폼 스타일
export const AddItemFormContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    margin-right: 10px;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }

  button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color:${({ theme }) => theme.colors.blue};
    color: white;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color:${({ theme }) => theme.colors.navy};
    }
  }
`;

export const ItemListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  font-size: 2rem;

  &:last-child {
    border-bottom: none;
  }

  button {
    background-color:${({ theme }) => theme.colors.skyblue};
    color: ${({ theme }) => theme.colors.black};
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color:${({ theme }) => theme.colors.pastelblue};
    }
  }
`;
