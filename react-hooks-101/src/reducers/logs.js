import { ADD_LOG,DELETE_ALL_LOG } from "../actions";

const logs = (state=[],action)=>{
    switch(action.type){
        case ADD_LOG:
            const log={
                description:action.description,
                date:action.date
            }
            return [log,...state]

        case DELETE_ALL_LOG:
            return []
            
        default:
            return state
    }
}

export default logs;