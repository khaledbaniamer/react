
import { useEffect, useState } from 'react';
import Custome from './custom';

const Login=()=>{
    const [data ,setData]=useState({email:'' , password:'' ,status:false});
    const [userData , setUserData ,status, handleSubmit] = Custome(data)
    console.log(userData , setUserData ,status);
    console.log(data );
   const handleChange =(e)=>{
    e.preventDefault()
        setData({[e.target.name]:e.target.value});
        // console.log(data)
    }

  return (
        <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label >Email:</label>
            <input type="email" className="form-control" onChange={handleChange} value={data.email} placeholder="Enter email" name="email"  />
            </div>
            <div className="form-group">
            <label >Password:</label>
            <input type="password" className="form-control" onChange={handleChange} value={data.password} placeholder="Enter password" name="pwd" />
            </div>
            <button type="submit"  className="btn btn-primary mt-5" >Submit</button>
        </form>
        </div>
  );
}

export default Login;