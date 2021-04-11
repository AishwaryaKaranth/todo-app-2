import React from "react";
import TextField from '@material-ui/core/TextField';
import {useState} from "react";
import './App.css';

function App() {
  const [todo, setTodo]=useState("")
  const addItem=()=>{
    
  }
  return (
    <div className="App">
      <h1>Eisenhower's Matrix</h1>
      <TextField 
        id="standard-basic" 
        label="Standard" 
        value={todo}
        onChange={(e)=>{
          setTodo(e.target.value)
        }}
      />
    </div>
  );
}

export default App;
