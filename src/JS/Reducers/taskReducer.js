//import
import { ADD_TASK, DELETE_TASK } from "../ActionsType/actionType";
//initialState
const initialState={
listTasks:[
    {id:Math.random(), caption:"Home Work", isDone:false},
    {id:Math.random(), caption:"Sport", isDone:false},
    ]
}
//pure function
const taskReducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case ADD_TASK:
            
            return {...state, listTasks:[...state.listTasks, payload]}
        case DELETE_TASK:

        return{...state, listTasks:[...state.listTasks.filter(el=>el.id !== payload)]}
    
        default:
            return state
    }
}
export default taskReducer