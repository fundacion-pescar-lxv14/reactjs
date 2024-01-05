import { FormControl } from "@mui/base";
import { Input, Button } from "@mui/material";
function TasksAdd(props){

    return(
    <FormControl {...props}>
        <Input sx={{width: 'min(80%, 360px)'}} placeholder="Ingrese una Tarea"/>
        <Button>Agregar</Button>
    </FormControl>
)}

export default TasksAdd;