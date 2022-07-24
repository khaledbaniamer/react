
const counterReducer = (state = {count:0}, action)=>{
    // console.log(state);
    switch (action.type) {
        case 'INCREMENT':return{
            ...state,
            count:state.count+ action.payload
        }
        case 'DECREMENT':return{
            ...state,
            count:state.count-action.payload
        }
        case 'INCREMENTBYTWO':return{...state , count:state.count+action.payload}
        
        default:
            return state;
    }
}

export default counterReducer;