export const ADD_TODO = "ADD_TODO";
export const TOGGLE_STATUS = "TOGGLE_STATUS"
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

