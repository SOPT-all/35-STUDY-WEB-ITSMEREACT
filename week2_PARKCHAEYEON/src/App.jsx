// 조건부 렌더링 연습하기 TODO
const Item = ({ name, isPacked }) => {
  return (
    <li className="item">
      {name} {isPacked ? "✅" : "❌"}
    </li>
  );
};

// 리스트 렌더링 연습하기 STUDY MEMBER LIST
const List = ({ person }) => {
  return (
    <div key={person.id}>
      <img src={person.image} alt={person.name} style={{ width: "6rem" }} />
      <p>
        <b>{person.name}</b>
      </p>
      <span>
        {person.study} | {person.role}
      </span>
    </div>
  );
};

import { people } from "./data.js";

export default function App() {
  return (
    <div>
      <section>
        <h1>TO DO LIST</h1>
        <ul>
          <Item isPacked={true} name="나리스 2주차 아티클 작성" />
          <Item isPacked={true} name="웹파트 3주차 공유과제 작성" />
          <Item isPacked={false} name="웹파트 3주차 숫자게임 구현" />
          <Item isPacked={false} name="나리스 2주차 실습 진행" />
        </ul>
      </section>

      <article>
        <h1>나리스 스터디원</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          {people.map((person) => {
            return <List person={person} />;
          })}
        </div>
      </article>
    </div>
  );
}
