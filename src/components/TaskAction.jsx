import { CardActions, Typography,  IconButton } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

import { useContext } from "react";
import { TasksContext, EditContext, useRequest } from "../hooks";

export const TaskAction = ({id, status}) =>{
    const { dispatch } = useContext(TasksContext);
    const { getTask } = useContext(EditContext);
    const deleteOne = () => {
        useRequest({id, method: "DELETE"})
    }
    return(
    <CardActions sx={{justifyContent: "flex-end"}}>
        <Typography sx={{paddingLeft: '.5rem', width: '100%'}}>
            {status}
        </Typography>
        <IconButton onClick={()=>getTask(id)}>
            <EditIcon/>
        </IconButton>
        <IconButton onClick={deleteOne}>
            <DeleteIcon/>
        </IconButton>
        <IconButton onClick={()=>dispatch({type:"CHECK_TASK",id})}>
            <DoneIcon/>
        </IconButton>
    </CardActions>
)}