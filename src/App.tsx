import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen justify-center">
      <div className="m-auto">
        <div className="text-6xl text-red-600 text-center">{count}</div>
        <button
          className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white"
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          count+
        </button>
      </div>
    </div>
  );
}

export default App;
