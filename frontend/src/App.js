import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputOption, setInputOption] = useState("text");
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const contents = event.target.result;
      setText(contents);
    };

    reader.readAsText(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("/generate_output", { text })
      .then((response) => {
        setOutput(response.data.output);
      });
  };

  return (
    <div style={{ textAlign: "center", backgroundColor: "#89CFF0", minHeight: "100vh", padding: "30px 0" }}>
      <h1 style={{ fontSize: "36px", margin: "20px 0", color: "#666" }}>
        HiLite
      </h1>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <button
          style={{ margin: "0 10px", padding: "10px 20px", background: inputOption === "text" ? "#666" : "#fff", color: inputOption === "text" ? "#fff" : "#666", border: "2px solid #ccc" }}
          onClick={() => setInputOption("text")}
        >
          Paste Text
        </button>
        <button
          style={{ margin: "0 10px", padding: "10px 20px", background: inputOption === "file" ? "#666" : "#fff", color: inputOption === "file" ? "#fff" : "#666", border: "2px solid #ccc" }}
          onClick={() => setInputOption("file")}
        >
          Upload File
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {inputOption === "text" && (
          <div>
            <p style={{ fontSize: "18px", color: "#666" }}>Paste your document:</p>
            <textarea
              rows={4}
              style={{
                width: "80%",
                height: "200px",
                margin: "20px auto",
                padding: "10px",
                borderRadius: "10px",
                border: "2px solid #ccc",
                backgroundColor: "#fff",
              }}
              className="text-area"
              onChange={handleInputChange}
              id="text"
              name="text"
              placeholder="Enter text..."
            />
          </div>
        )}
        {inputOption === "file" && (
          <div>
            <p style={{ fontSize: "18px", color: "#666" }}>Upload a file:</p>
            <input type="file" accept=".txt,.doc,.docx,.pdf" onChange={handleFileChange} style={{ marginBottom: "20px" }} />
          </div>
        )}
        <br />
    <button
      type="submit"
      className="w3-button w3-blue"
      value="Submit"
      style={{ 
        display: 'block',
        margin: '20px auto',
        padding: '10px 20px',
        fontSize: '18px',
        borderRadius: '10px',
        background: '#666',
        color: '#fff',
        border: 'none'
      }}
    >
      Submit
    </button>
  </form>
  <p style={{ fontSize: '18px', color: '#666' }}>SCRIPT RESPONSE: </p>
  <p style={{ fontSize: '18px', margin: '20px 0', color: '#666' }}>{output}</p>
</div>




  );
}

export default App;
