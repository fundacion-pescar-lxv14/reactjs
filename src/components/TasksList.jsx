import { useContext } from "react";
import { Stack } from "@mui/material";
import { TasksContext } from "../hooks/TasksProvider";
import { TaskItem } from "./TaskItem";

function TasksList(props){
    const { tasks } = useContext(TasksContext);
    return(
    <Stack spacing={2} direction={{xs: 'column', sm:'row'}} useFlexGap flexWrap="wrap" {...props}>
        { tasks?.map((props,i) => <TaskItem key={props.id ?? i} {...props}/> )}
    </Stack>
)}

export default TasksList;