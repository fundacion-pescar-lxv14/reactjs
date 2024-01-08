import { TasksProvider } from "./hooks"
import { TasksAdd, TasksFilter, TasksList } from "./components"
import { col, containerXXL } from "./styles"

function App() {

    return(
    <TasksProvider>
        <TasksAdd style={col()}/>
        <TasksFilter/>
        <TasksList sx={containerXXL}/>
    </TasksProvider>
)}

export default App