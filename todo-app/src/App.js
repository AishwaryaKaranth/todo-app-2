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
  const [first, setFirst]=useState("")
  const [second, setSecond]=useState("")
  const [third, setThird]=useState("")
  const [fourth, setFourth]=useState("")
  const [list, setList]=useState([])

  const addFirstItem=(e)=>{
    e.preventDefault();
    
    db.collection("todo").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      todo:first,
    });

    setFirst("");
  }

  useEffect(()=>{getFirstItem();
  },[]);

  const getFirstItem=()=>{
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

  const addSecondItem=(e)=>{
    e.preventDefault();
    
    db.collection("todo").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      todo:first,
    });

    setFirst("");
  }

  useEffect(()=>{getSecondItem();
  },[]);

  const getSecondItem=()=>{
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

  const addThirdItem=(e)=>{
    e.preventDefault();
    
    db.collection("todo").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      todo:first,
    });

    setFirst("");
  }

  useEffect(()=>{getThirdItem();
  },[]);

  const getThirdItem=()=>{
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

  const addFourthItem=(e)=>{
    e.preventDefault();
    
    db.collection("todo").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      todo:first,
    });

    setFirst("");
  }

  useEffect(()=>{getFourthItem();
  },[]);

  const getFourthItem=()=>{
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
      <div className="first" style={{border:"1px solid red"}}>
        <form>
          <TextField 
            id="standard-basic" 
            label="Standard" 
            value={first}
            onChange={(e)=>{
              setFirst(e.target.value)
            }}
          />
          <Button 
            variant="contained" 
            color="primary"
            onClick={addFirstItem}
          >
            Add
          </Button>
        </form>
        {list.map((todo) => (
          <p>{todo.todo}</p>
        ))}
      </div>
      <div className="second" style={{border:"1px solid red"}}>
        <form>
          <TextField 
            id="standard-basic" 
            label="Standard" 
            value={second}
            onChange={(e)=>{
              setSecond(e.target.value)
            }}
          />
          <Button 
            variant="contained" 
            color="primary"
            onClick={addSecondItem}
          >
            Add
          </Button>
        </form>
        {list.map((todo) => (
          <p>{todo.todo}</p>
        ))}
      </div>
      <div className="third" style={{border:"1px solid red"}}>
        <form>
          <TextField 
            id="standard-basic" 
            label="Standard" 
            value={third}
            onChange={(e)=>{
              setThird(e.target.value)
            }}
          />
          <Button 
            variant="contained" 
            color="primary"
            onClick={addThirdItem}
          >
            Add
          </Button>
        </form>
        {list.map((todo) => (
          <p>{todo.todo}</p>
        ))}
      </div>
      <div className="fourth" style={{border:"1px solid red"}}>
        <form>
          <TextField 
            id="standard-basic" 
            label="Standard" 
            value={fourth}
            onChange={(e)=>{
              setFourth(e.target.value)
            }}
          />
          <Button 
            variant="contained" 
            color="primary"
            onClick={addFourthItem}
          >
            Add
          </Button>
        </form>
        {list.map((todo) => (
          <p>{todo.todo}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
