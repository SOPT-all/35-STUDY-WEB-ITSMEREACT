const List = ({ person }) => {
  return (
    <div key={person.id}>
      <p>{person.name}</p>
      <span>{person.study}</span>
      <span> {person.role}</span>
    </div>
  );
};

export default List;
