import { Card, CardHeader, CardContent, Typography } from "@mui/material"
import { TaskAction } from "./TaskAction";

export const TaskItem = ({title, content, ...props}) => 
    <Card sx={{ flex: '1 0 min(100%, 360px)',  boxShadow: 10 }} {...props}>
        <CardHeader title={title} />
        <CardContent>
            <Typography>{content}</Typography>
        </CardContent>
        <TaskAction />
    </Card>