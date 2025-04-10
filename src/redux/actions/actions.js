export const ADD_TODO = "ADD_TODO";
export const TOGGLE_STATUS = "TOGGLE_STATUS"
export const DELETE_TODO = "DELETE_TODO"
export const SEARCH_TASK = "SEARCH_TASK"
export const SORT_OLDEST_FIRST = "SORT_OLDEST_FIRST"
// export const SORT_NEWEST_FIRST = "SORT_NEWEST_FIRST"
export const addTodo=(todoObj)=>{
     localStorage.setItem("todos", JSON.stringify(todoObj));

        return{
            type:ADD_TODO,
            payload:todoObj,
        }
}

export const toggleStatus=(todo)=>{
    return{
        type:TOGGLE_STATUS,
        payload:todo,
    }

}
export const deleteTodo=(todo)=>{
    return{
        type:DELETE_TODO,
        payload:todo,
    }

}
export const searchTodo=(matchedTodo)=>{
    return{
        type:SEARCH_TASK,
        payload:matchedTodo,
    }

}
export const sortOldToNew =(sortedOToN)=>{
    return{
        type:SORT_OLDEST_FIRST,
        payload:sortedOToN,
    }

}
// export const sortNewToOld=()=>{

// }
