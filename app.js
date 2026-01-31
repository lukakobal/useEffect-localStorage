import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem("count");

    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="app">
      <h1>React 75 – useEffect + localStorage</h1>

      <p className="count">Count: {count}</p>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>➕ Increase</button>
        <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
        <button onClick={() => setCount(0)}>🔄 Reset</button>
      </div>

      <p className="info">Osveži stran (F5) in poglej, kaj se zgodi 👀</p>
    </div>
  );
}
