import {useState } from 'react';

export default function Custome(em, pa){
const [email , setEmail] = useState("khaled@mail.com");
const [pass , setpass] = useState("123");
const [status , setStatus] = useState(false);
const Handlechange = () =>{
    if(em ==email && pa ==pass)
   {
    setStatus(true)
     window.alert('Login is success');
   }else{
    window.alert('Login is danger');
   }
    }

    return(
    [ email ,pass , status, Handlechange]
    )
}
