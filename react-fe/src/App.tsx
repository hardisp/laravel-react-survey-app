import { useState } from "react";
import { BeakerIcon, UserIcon } from "@heroicons/react/24/solid";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-cyan-500 h-screen text-white">
      <h1 className="text-3xl font-bold underline">Survey App Landing Page</h1>
      <p></p>
      <BeakerIcon className="h-6 w-6" />
      <p></p>
      <UserIcon className="w-4" />
    </div>
  );
}

export default App;
