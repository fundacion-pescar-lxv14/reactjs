import { useRef, useContext } from "react";
import { textArea } from "../styles";

import { Textarea } from "@mui/joy";
import { Input, Button } from "@mui/material";

import { EditContext, TasksContext } from "../hooks";
import { isEmpty, getValues } from "../utils"

function TasksAdd(props){
    const {tasks, dispatch} = useContext(TasksContext);
    const {current, setCurrent, edit, setEdit } = useContext(EditContext);
    const formRef = useRef("");

    const AddTask=()=>{
        const type = edit ? "EDIT_TASK" : "ADD_TASK";
        const [title, content] = getValues(formRef);
        if(isEmpty(title) || isEmpty(content)) 
            alert("Todos los campos son obligatorios")
        else {
            dispatch({type,task:{title, content}})
            setEdit(false); 
            setCurrent([{}]);
            formRef.current.reset()
        }}
    return(
    <form ref={formRef} {...props}>
        <Input name="title" placeholder="Ingrese un Titulo"/>
        <Textarea name="content" style={textArea()} placeholder="Desarrolle la tarea que desee ingresar"/>
        <Button onClick={AddTask}>Agregar</Button>
    </form>
)}

export default TasksAdd;