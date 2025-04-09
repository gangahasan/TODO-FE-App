export const ADD_TODO = "ADD_TODO";

export const addTodo=(todoObj)=>{
     localStorage.setItem("todos", JSON.stringify(todoObj));

        return{
            type:ADD_TODO,
            payload:todoObj,
        }
}
