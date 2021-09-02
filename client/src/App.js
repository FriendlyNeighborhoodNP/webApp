import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [myString, setMyString] = useState("Loading");

  useEffect(() => {
    fetch("/api/appt")
      .then((data) => data.json())
      .then((data) => setMyString(data.method));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{myString}</p>
      </header>
    </div>
  );
}

export default App;