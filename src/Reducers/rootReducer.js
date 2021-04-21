const rootReducer = (state={todo:['baristas','golf']},action) =>{
    if(action.type== 'ADD'){
        return state= {todo:[...state.todo, action.payLoad]}
    }
    else 
    return  state

}


export default rootReducer