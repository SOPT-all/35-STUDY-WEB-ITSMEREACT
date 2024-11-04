import Greeting from "./components/Greeting";
import Button from "./components/Button";
import UserProfile from "./components/UserProfile";
import Message from "./components/Message";
import Card from "./components/Card";

function App() {
  const user = { name: "Alice", age: 25 };
  const handleClick = () => alert("Button clicked!");
  return (
    <>
      <Greeting name="Alice" />
      <Button label="Primary" color="blue" onClick={handleClick} />
      <Button label="Danger" color="red" onClick={handleClick} />
      <UserProfile user={user} />
      <Message isLoggedIn={true} />
      <div style={{ padding: "20px" }}>
        <Card>
          <h2>Welcome</h2>
          <p>This is a reusable card component.</p>
        </Card>

        <Card>
          <button onClick={() => alert("Button clicked!")}>Click Me</button>
        </Card>
      </div>
    </>
  );
}

export default App;
