import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "Chaeneey",
    address: {
      city: "Seoul",
      station: "Goungneung",
    },
  });

  const updateCity = () => {
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        city: "SeoSan",
      },
    }));
  };

  console.log(user);

  return (
    <div>
      <p>
        {user.name} lives in {user.address.city}.
      </p>
      <button onClick={updateCity}>Move to SeoSan</button>
    </div>
  );
}

export default App;
