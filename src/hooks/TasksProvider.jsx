import { createContext, useEffect, useState, useReducer } from 'react'
import { TasksReducer, useRequest } from './';

export const TasksContext = createContext([]);
export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    const [state, dispatch] = useReducer(TasksReducer, tasks);
    useEffect( ()=>{useRequest({callback: (e) => setTasks(e)})}, [])
    return(
    <TasksContext.Provider value={{tasks, dispatch}}>
        {children}
    </TasksContext.Provider>
)}