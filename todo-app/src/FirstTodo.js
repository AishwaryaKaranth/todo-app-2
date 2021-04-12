import React from "react";
import {ListItem, ListItemText, Button} from "@material-ui/core";
import {db} from "./firebase_config";

const FirstTodoList=({firstTodo, inprogress, id})=>{
    function toggleInProgress(){
        db.collection("first").doc(id).update({
            inprogress: !inprogress,
        })
    }
    function deleteTodo(){
        db.collection("first").doc(id).delete();
    }
    return(
        <div style={{display:"flex"}}>
            <ListItem>
                <ListItemText
                    primary={firstTodo}
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
export default FirstTodoList;