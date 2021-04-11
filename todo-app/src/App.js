import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useState} from "react";
import {useEffect} from "react";
import firebase from "firebase";
import {db} from "./firebase_config";
import './App.css';

function App() {
  const [todos, setTodo]=useState("")
  const [list, setList]=useState([])
  const addItem=(e)=>{
    e.preventDefault();
    
    db.collection("todo").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      todo:todos,
    });

    setTodo("");
  }

  useEffect(()=>{getItem();
  },[]);

  const getItem=()=>{
    db.collection("todo").onSnapshot(function(querySnapshot){
      
        setList(
          querySnapshot.docs.map((doc)=>({
            id:doc.id,
            todo:doc.data().todo,
            inprogress:doc.data().inprogress,
          }))
        );
      });
    
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
      {list.map((todo) => (
        <p>{todo.todo}</p>
      ))}
    </div>
  );
}

export default App;
