import { createContext, useEffect, useState, useReducer } from 'react'
import { TasksReducer } from './TasksReducer';

export const TasksContext = createContext([]);
export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([
        {id:0, title: "HTML", content: "HyperText Markup Language", fulfilled: true},
        {id:1, title: "CSS", content: "Cascading StyleSheets", fulfilled: true},
        {id:2, title: "JS", content: "Javascript (ECMAscript)", fulfilled: false}
    ])
    const [state, dispatch] = useReducer(TasksReducer, tasks);
    useEffect( ()=>{setTasks(state)}, [state])
    return(
    <TasksContext.Provider value={{tasks, dispatch}}>
        {children}
    </TasksContext.Provider>
)}