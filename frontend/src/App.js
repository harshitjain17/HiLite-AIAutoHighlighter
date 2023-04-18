import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/script/generate", {
      method: "POST",
      body: JSON.stringify({ text: text }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
  };

  return (
    <div>
      <p>HiLite</p>
      <p>Paste your document:</p>
      <textarea
        rows={4}
        style={{ flex: 1 }}
        className="text-area"
        onChange={handleTextChange}
        id="text"
        name="text"
        placeholder="Enter text..."
      />
      <button
        type="submit"
        className="w3-button w3-blue"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button>

      <p>SCRIPT RESPONSE: </p>
    </div>
  );
}

export default App;
