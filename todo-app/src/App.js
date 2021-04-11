import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useState} from "react";
import firebase from "firebase";
import {db} from "./firebase_config";
import './App.css';

function App() {
  const [todos, setTodo]=useState("")

  const addItem=(e)=>{
    e.preventDefault();
    
    db.collection("todo").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      todo:todos,
    });

    setTodo("");
  }
  return (
    <div className="App">
      <h1>Eisenhower's Matrix</h1>
      <form>
        <TextField 
          id="standard-basic" 
          label="Standard" 
          value={todos}
          onChange={(e)=>{
            setTodo(e.target.value)
          }}
        />
        <Button 
          variant="contained" 
          color="primary"
          onClick={addItem}
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default App;
