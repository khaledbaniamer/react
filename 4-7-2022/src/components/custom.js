import {useState } from 'react';

export default function Custome(givenEmail , givenPass){
  // console.log(givenEmail , givenPass)
const [data , setData] = useState({ema:'khaled@mail.com' , pass:'123' , status:false});
// console.log(data)
const Handlechange = (e) =>{
  e.preventDefault();
    if(givenEmail == data.ema && givenPass ==data.pass)
   {
    setData({status:true})
     window.alert('Login is success');
   }else{
    window.alert('Login is danger');
   }
    }

    return(
    [ data.status , Handlechange]
    )
}
