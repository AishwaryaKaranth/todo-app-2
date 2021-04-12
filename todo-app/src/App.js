import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useState} from "react";
import {useEffect} from "react";
import firebase from "firebase";
import {db} from "./firebase_config";
import './App.css';
import TodoList from "./FirstTodo";

function App() {
  
  const [first, setFirst]=useState("")
  const [second, setSecond]=useState("")
  const [third, setThird]=useState("")
  const [fourth, setFourth]=useState("")
  const [firstList, setFirstList]=useState([])
  const [secondList, setSecondList]=useState([])
  const [thirdList, setThirdList]=useState([])
  const [fourthList, setFourthList]=useState([])


  const addFirstItem=(e)=>{
    e.preventDefault();
    
    db.collection("first").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      firstTodo:first,
    });

    setFirst("");
  }

  useEffect(()=>{getFirstItem();
  },[]);

  const getFirstItem=()=>{
    db.collection("first").onSnapshot(function(querySnapshot){
        setFirstList(
          querySnapshot.docs.map((doc)=>({
            id:doc.id,
            firstTodo:doc.data().firstTodo,
            inprogress:doc.data().inprogress,
          }))
        );
      });
    
  }

  const addSecondItem=(e)=>{
    e.preventDefault();
    
    db.collection("second").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      secondTodo:second,
    });

    setSecond("");
  }

  useEffect(()=>{getSecondItem();
  },[]);

  const getSecondItem=()=>{
    db.collection("second").onSnapshot(function(querySnapshot){
      
        setSecondList(
          querySnapshot.docs.map((doc)=>({
            id:doc.id,
            secondTodo:doc.data().secondTodo,
            inprogress:doc.data().inprogress,
          }))
        );
      });
    
  }

  const addThirdItem=(e)=>{
    e.preventDefault();
    
    db.collection("third").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      thirdTodo:third,
    });

    setThird("");
  }

  useEffect(()=>{getThirdItem();
  },[]);

  const getThirdItem=()=>{
    db.collection("third").onSnapshot(function(querySnapshot){
      
        setThirdList(
          querySnapshot.docs.map((doc)=>({
            id:doc.id,
            thirdTodo:doc.data().thirdTodo,
            inprogress:doc.data().inprogress,
          }))
        );
      });
    
  }

  const addFourthItem=(e)=>{
    e.preventDefault();
    
    db.collection("fourth").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      fourthTodo:fourth,
    });

    setFourth("");
  }

  useEffect(()=>{getFourthItem();
  },[]);

  const getFourthItem=()=>{
    db.collection("fourth").onSnapshot(function(querySnapshot){
      setFourthList(
          querySnapshot.docs.map((doc)=>({
            id:doc.id,
            fourthTodo:doc.data().fourthTodo,
            inprogress:doc.data().inprogress,
          }))
        );
      });
    
  }

  return (
    <div className="App">
      <h1>Eisenhower's Matrix</h1>
      <div className="container">
      <div className="grid-item">
        <form>
          <TextField 
            id="standard-basic" 
            label="Important and Urgent" 
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
        {firstList.map((f) => (
          <p>{f.firstTodo}</p>
        ))}
      </div>
      <div className="grid-item">
        <form>
          <TextField 
            id="standard-basic" 
            label="Important but Not Urgent" 
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
        {secondList.map((s) => (
          <>
          <p>{s.secondTodo}</p>
          <p>{s.timestamp}</p>
          </>
        ))}
      </div>
      
      <div className="grid-item">
        <form>
          <TextField 
            id="standard-basic" 
            label="Not Important but Urgent" 
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
        {thirdList.map((t) => (
          <p>{t.thirdTodo}</p>
        ))}
      </div>
      <div className="grid-item">
        <form>
          <TextField 
            id="standard-basic" 
            label="Not Important Not Urgent" 
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
        {fourthList.map((p) => (
          <>
          <p>{p.fourthTodo}</p>
          </>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
