import { produce } from "immer";
import { useState } from "react";

const initialUser = {
  name: "John Doe",
  email: "john@example.com",
  todos: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Immer", completed: false },
  ],
};

function App() {
  const [user, setUser] = useState(initialUser);

  const updateEmail = (newEmail) => {
    setUser(
      produce((draft) => {
        draft.email = newEmail;
      })
    );
  };

  const addTodo = (text) => {
    setUser(
      produce((draft) => {
        draft.todos.push({
          id: draft.todos.length + 1,
          text,
          completed: false,
        });
      })
    );
  };

  const toggleTodo = (id) => {
    setUser(
      produce((draft) => {
        const todo = draft.todos.find((t) => t.id === id);
        if (todo) {
          todo.completed = !todo.completed;
        }
      })
    );
  };

  return (
    <div>
      <h1>{user.name} Profile</h1>
      <p>Email: {user.email}</p>
      <button onClick={() => updateEmail("newemail@example.com")}>
        Update Email
      </button>
      <h2>Todos:</h2>
      <ul>
        {user.todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
    </div>
  );
}

export default App;
