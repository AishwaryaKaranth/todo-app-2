import React from "react";
import {ListItem, ListItemText, Button} from "@material-ui/core";
import {db} from "./firebase_config";

const FourthTodoList=({fourthTodo, inprogress, id})=>{
    function toggleInProgress(){
        db.collection("fourth").doc(id).update({
            inprogress: !inprogress,
        })
    }
    function deleteTodo(){
        db.collection("fourth").doc(id).delete();
    }
    return(
        <div style={{display:"flex"}}>
            <ListItem>
                <ListItemText
                    primary={fourthTodo}
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
export default FourthTodoList;