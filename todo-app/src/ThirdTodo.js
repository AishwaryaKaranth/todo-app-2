import React from "react";
import {ListItem, ListItemText, Button} from "@material-ui/core";
import {db} from "./firebase_config";

const ThirdTodoList=({thirdTodo, inprogress, id})=>{
    function toggleInProgress(){
        db.collection("third").doc(id).update({
            inprogress: !inprogress,
        })
    }
    function deleteTodo(){
        db.collection("third").doc(id).delete();
    }
    return(
        <div style={{display:"flex"}}>
            <ListItem>
                <ListItemText
                    primary={thirdTodo}
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
export default ThirdTodoList;