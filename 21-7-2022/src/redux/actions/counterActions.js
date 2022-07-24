
export const incrementAction = (mount)=>{
    return {type:'INCREMENT', payload:mount }
}

export const decrementAction = (mount)=>{
    return {type:'DECREMENT' , payload:mount }
}

export const incrementByTwo = ()=>{
    return {type:'INCREMENTBYTWO' , payload:2}
}