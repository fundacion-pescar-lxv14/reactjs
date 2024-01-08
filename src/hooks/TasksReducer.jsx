export const TasksReducer = (state, action) => {
    switch(action.type){
    case "ADD_TASK":
        return [...state, {...action.task, fulfilled: false} ];
    case "EDIT_TASK":
        return state.map((task,i) => 
        task.id === action.id ? action.task : task);
    case "DELETE_TASK":
        return state.filter((task,i) => 
        task.id !== action.id);
    case "CHECK_TASK":
        return state.map((task,i)=> 
        task.id === action.id ? 
        {...task, fulfilled: !task.fulfilled} : task);
    default: return state;
    }
}