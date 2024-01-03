import { FormControl } from "@mui/base";
import { Input, Button } from "@mui/material";
function TasksAdd(){

    return(
        <FormControl>
        <Input placeholder="Ingrese una Tarea"/>
        <Button>Agregar</Button>
        </FormControl>
)}

export default TasksAdd;