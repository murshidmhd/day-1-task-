import { Component, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeCard from "./components/wlcomeCard";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=> console.log("you cliked ", count))
  function hey() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }
  function reset() {
setCount(0)  }
  return (
    <div>
      <h2>count: {count} </h2>

      { count === 10 && <p> your limit reached </p>}
      <button onClick={hey}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
