import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-cyan-500">
      <h1 className="text-3xl font-bold underline">Survey App Landing Page</h1>
    </div>
  );
}

export default App;
