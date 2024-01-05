import { TasksProvider } from "./hooks"
import { TasksAdd, TasksFilter, TasksList } from "./components"

function App() {
    return(
    <TasksProvider>
        <TasksAdd/>
        <TasksFilter/>
        <TasksList/>
    </TasksProvider>
)}

export default App