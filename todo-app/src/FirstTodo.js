import React from "react";
import {ListItem, ListItemText, Button} from "@material-ui/core";
import {db} from "./firebase_config";

const FirstTodoList=({todo, inprogress, id})=>{
    function toggleInProgress(){
        db.collection("first").doc(id).update({
            inprogress: !inprogress,
        })
    }
    return(
        <div>
            <ListItem>
                <ListItemText
                    primary={todo}
                    secondary={inprogress?"In Progress":"Completed"}
                />
            </ListItem>
            <Button onClick={toggleInProgress}>
                {inprogress?"Done":"Not Completed"}
            </Button>
            <Button onClick={deleteTodo}>X</Button>
        </div>
    )
}
export default FirstTodoList;