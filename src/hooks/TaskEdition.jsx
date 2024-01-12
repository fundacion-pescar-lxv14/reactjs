import { useState, createContext, useContext } from "react"
import { TasksContext } from "./TasksProvider"

export const EditContext = createContext();

export const EditProvider = ({children}) => {
    const {tasks} = useContext(TasksContext)
    const [edit, setEdit] = useState(false);
    const [current, setCurrent] = useState();
    const getTask = (id) => setCurrent(tasks.filter(t => t.id === id))
    return(
    <EditContext.Provider value={{edit, setEdit, current, setCurrent, getTask}}>
        {children}
    </EditContext.Provider>
)}