

const reducer = (state=[],action)=>{
    switch(action.type){
        case "CREATE_EVENT":
            const event = {
                title:action.title,
                body:action.body
            };
            const length = state.length;
            let id = length===0 ? 1 : state[length-1].id+1
            return [...state,{id:id,...event}]
            

        case "DELETE_EVENT":
            return (state.filter((data)=>data.id!==action.id))
        case "DELETE_ALL_EVENT":
            return []

        default:
            return state
    }
}

export default reducer;

