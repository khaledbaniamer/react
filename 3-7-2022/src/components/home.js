import { useContext } from "react";
import { Context ,counterContext } from "../App";



function Home (){
    const name = useContext(Context);
    const [counter ,updateCounter , updateCounter1] = useContext(counterContext);
    // console.log(color1 ,updateColor);


    return (
        <div>
           
                <h3>Hi {name}  from Home</h3>
                <button onClick={updateCounter} >Increment</button>
                <button onClick={updateCounter1} >Decrement</button>
                <h1>{counter}</h1>
            
        </div>
    )
}

export default Home;