import { ADD_TASK , DELETE_TASK} from "../ActionsType/actionType"
//action for add task
export const addTask=(newTask)=>{
    return{
    type: ADD_TASK ,
    payload: newTask 
    }
}
//action for delete task
export const deleteTask=(id)=>{
    return{
    type:DELETE_TASK,
    payload:id,


}
}