import React from "react";
import {ListItem, ListItemText, Button} from "@material-ui/core";
import {db} from "./firebase_config";

const SecondTodoList=({secondTodo, inprogress, id})=>{
    function toggleInProgress(){
        db.collection("second").doc(id).update({
            inprogress: !inprogress,
        })
    }
    function deleteTodo(){
        db.collection("second").doc(id).delete();
    }
    return(
        <div style={{display:"flex"}}>
            <ListItem>
                <ListItemText
                    primary={secondTodo}
                    secondary={inprogress?"In Progress":"Completed"}
                />
            </ListItem>
            <Button onClick={toggleInProgress}>
                {inprogress?"Done":"Not Done"}
            </Button>
            <Button onClick={deleteTodo}>X</Button>
        </div>
    )
}
export default SecondTodoList;