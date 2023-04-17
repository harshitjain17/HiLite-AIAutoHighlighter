import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {


  
  const [list, setList] = useState("")
  const [summary, setsummary] = useState("");
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const get_summary = (e) => {
  e.preventDefault();
  axios
      .post("/summarize", {
          'summarize': summary,

        })
        .then((res) => {
            console.log(res.data);
            setList(res.data)

        });

};



  return (
    <div>
      <p>HiLite</p>
      <p>Paste your document:</p>
      <form onSubmit={get_summary} method="post">
        
    <p>
       <textarea rows={4} style={{ flex: 1 }} className="text-area" onChange={(e) => setsummary(e.target.value)} type="summaryname"  id="summaryname" name="summaryname" />
   </p>
   <p>
      <input type="submit" className="w3-button w3-blue" value="Submit" />
   </p>
</form>

      <p>FLASK RESPONSE: </p>
      
      <break></break>
      <p>{list}</p>


</div>
  );
}

export default App;