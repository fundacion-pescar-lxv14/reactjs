import { useRef, useContext } from "react";
import { textArea } from "../styles";

import { FormControl } from "@mui/base";
import { Textarea } from "@mui/joy";
import { Input, Button } from "@mui/material";

import { TasksContext } from "../hooks/TasksProvider";

function TasksAdd(props){
    const {tasks, setTasks} = useContext(TasksContext);
    const titleRef = useRef("");
    const contentRef = useRef("");

    const AddTask = () =>{
        const [title, content] = [titleRef.current.childNodes[0].value, contentRef.current.childNodes[0].value];

        (title.trim() !== "" && content.trim() !== "") ?
        setTasks([...tasks, { id: tasks.length, title, content }]) :
        alert("Todos los campos son obligatorios")
    }
    return(
    <FormControl {...props}>
        <Input ref={titleRef} placeholder="Ingrese un Titulo"/>
        <Textarea style={textArea()} ref={contentRef} placeholder="Desarrolle la tarea que desee ingresar"/>
        <Button onClick={AddTask}>Agregar</Button>
    </FormControl>
)}

export default TasksAdd;