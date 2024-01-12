import { TasksProvider, EditProvider } from "./hooks"
import { TasksAdd, TasksFilter, TasksList } from "./components"
import { col, containerXXL } from "./styles"

function App() {

    return(
    <TasksProvider>
        <EditProvider>
            <TasksAdd style={col()}/>
            <TasksFilter/>
            <TasksList sx={containerXXL}/>
        </EditProvider>
    </TasksProvider>
)}

export default App