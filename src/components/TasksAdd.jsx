import { useRef, useContext, useState } from "react";
import { textArea } from "../styles";

import { FormControl } from "@mui/base";
import { Textarea } from "@mui/joy";
import { Input, Button } from "@mui/material";

import { TasksContext } from "../hooks";
import { isEmpty, getValues } from "../utils"

function TasksAdd(props){
    const {tasks, dispatch} = useContext(TasksContext);
    const [edit, setEdit] = useState(false)
    const titleRef = useRef("");
    const contentRef = useRef("");
    const AddTask = () =>{
        const [title, content] = getValues([titleRef, contentRef]);
        if(isEmpty(title) && isEmpty(content)) alert("Todos los campos son obligatorios")
        else {
            const type = edit ? "EDIT_TASK" : "ADD_TASK"
            dispatch({type, id, task:{title, content}})
    }}
    return(
    <FormControl {...props}>
        <Input ref={titleRef} placeholder="Ingrese un Titulo"/>
        <Textarea style={textArea()} ref={contentRef} placeholder="Desarrolle la tarea que desee ingresar"/>
        <Button onClick={AddTask}>Agregar</Button>
    </FormControl>
)}

export default TasksAdd;