import { useRef, useContext } from "react";
import { textArea } from "../styles";

import { Textarea } from "@mui/joy";
import { Input, Button } from "@mui/material";

import { EditContext, useRequest } from "../hooks";
import { isEmpty, getValues } from "../utils"

function TasksAdd(props){
    const {current, setCurrent, edit, setEdit } = useContext(EditContext);
    const formRef = useRef("");

    const AddTask=()=>{
        const [title, content] = getValues(formRef);
        const method = edit ? "PUT": "POST";
        if(isEmpty(title) || isEmpty(content)) 
            alert("Todos los campos son obligatorios")
        else {
            useRequest({method, params:{title,content}})
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