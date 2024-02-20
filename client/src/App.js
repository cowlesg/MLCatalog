import React, { useState, useEffect } from "react";
import "./App.css";
import HomeHeader from "./HomeHeader";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
console.log(message);
  return (
    <div className="App">
      <HomeHeader/>
    </div>
  );
}

export default App