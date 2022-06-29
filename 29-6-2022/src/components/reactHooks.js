import { useState } from "react";
import './hooks.css'
const Hooks = ()=>{
    const [name , setName]=useState('Ahmad')

   const  handleClick = ()=>{
        setName('Khaled');
    }

    const handleDoubleClick = ()=>{
        setName('Ahmad')
    }

    return(
        <div className="hook">
            <p>{name}</p>
            <button onClick={handleClick} onDoubleClick={handleDoubleClick}>Change Name</button>
        </div>
    );
}
export default Hooks;