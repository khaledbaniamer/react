import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction, incrementByTwo } from "../redux/actions/counterActions";


const Counter = ()=>{
    const [mount , setMount] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector(state => state.count)
    const handleIncrement = ()=>{
        dispatch(incrementAction(+mount))
    }
    const handleDecrement = ()=>{
        dispatch(decrementAction(+mount))
    }
    const handleChange = (e) =>{
        setMount(e.target.value)
    }
    const handleIncrementByTwo = ()=>{
        dispatch(incrementByTwo())
    }
    return (
        <>
            {/* <div>{counter}</div> */}
            <input value={mount}  onChange={handleChange}/>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrementByTwo}>Increment value 2</button>
            <div>{counter}</div>
        </>
    )
}

export default Counter;