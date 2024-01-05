import { TasksProvider } from "./hooks"
import { TasksAdd, TasksFilter, TasksList } from "./components"

function App() {
    return(
    <TasksProvider>
        <TasksAdd style={{textAlign: 'center'}}/>
        <TasksFilter/>
        <TasksList sx={{maxWidth: '1320px', margin: 'auto'}}/>
    </TasksProvider>
)}

export default App