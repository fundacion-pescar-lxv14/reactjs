import { CardActions, IconButton } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

import { useContext } from "react";
import { TasksContext } from "../hooks/TasksProvider";

export const TaskAction = ({id}) =>{
    const { tasks, setTasks } = useContext(TasksContext)
    
    const handleAction = (id, action, value='') => {
        switch(action){
        case "EDIT_TASK":
            return setTasks(tasks.map((task,i) => task.id === id ? tasks[i] = value : task))
        case "DELETE_TASK":
            return setTasks(tasks.filter( (task,i) => i !== id ))
        case "CHECK_TASK":
            return setTasks(tasks.map(
                (task, i) => task.id === id ? tasks[i].checked = !tasks[i].checked : task
            ))
        }
    }
    return(
    <CardActions sx={{justifyContent: "flex-end"}}>
        <IconButton onClick={()=> console.log(id)}>
            <EditIcon/>
        </IconButton>
        <IconButton onClick={()=> handleAction(id, "DELETE_TASK")}>
            <DeleteIcon/>
        </IconButton>
        <IconButton onClick={()=> handleAction(id, "CHECK_TASK")}>
            <DoneIcon/>
        </IconButton>
    </CardActions>
)}