import { CardActions, Typography,  IconButton } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

import { useContext } from "react";
import { TasksContext } from "../hooks";

export const TaskAction = ({id, status}) =>{
    const { dispatch } = useContext(TasksContext)
    return(
    <CardActions sx={{justifyContent: "flex-end"}}>
        <Typography sx={{paddingLeft: '.5rem', width: '100%'}}>
            {status}
        </Typography>
        <IconButton onClick={()=> console.log(id)}>
            <EditIcon/>
        </IconButton>
        <IconButton onClick={()=>dispatch({type:"DELETE_TASK",id})}>
            <DeleteIcon/>
        </IconButton>
        <IconButton onClick={()=>dispatch({type:"CHECK_TASK",id})}>
            <DoneIcon/>
        </IconButton>
    </CardActions>
)}