import { createContext, useEffect, useState, useReducer } from 'react'
import { TasksReducer } from './TasksReducer';

export const TasksContext = createContext([]);
export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    const [state, dispatch] = useReducer(TasksReducer, tasks);
    useEffect( ()=>{setTasks(state)}, [state])
    return(
    <TasksContext.Provider value={{tasks, dispatch}}>
        {children}
    </TasksContext.Provider>
)}