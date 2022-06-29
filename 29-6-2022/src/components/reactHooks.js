import { useState} from "react";
import {useParams} from 'react-router-dom'

import './hooks.css'
const Hooks = ()=>{
    // const params = new useParams();
    console.log(useParams);
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