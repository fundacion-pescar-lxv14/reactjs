import { CardActions, IconButton, Divider } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

export const TaskAction = () =>
    <CardActions sx={{justifyContent: "flex-end"}}>
        <IconButton>
            <EditIcon/>
        </IconButton>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
        <IconButton>
            <DoneIcon/>
        </IconButton>
    </CardActions>