import { useEffect, useLayoutEffect, useState } from 'react';
import Custome from './custom';
// import image  form '../image';
const Login=()=>{
    const [email ,setEmail]=useState('');
    const [pass ,setPas]=useState('');
    const [ status , handleSubmit] = Custome(email , pass)
    console.log(status);
  //  if (status) {
  //   window.location.href='/';
  // }else{
  //    window.location.href='/login';

  //  }
  console.log(process.env)
  return (
        <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label >Email:</label>
            <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" name="email"  />
            </div>
            <div className="form-group">
            <label >Password:</label>
            <input type="password"  className="form-control" onChange={(e)=>setPas(e.target.value)} placeholder="Enter password" name="password" />
            </div>
            <button  className="btn btn-primary mt-5" >Submit</button>
        </form>
        <img src={process.env.PUBLIC_URL +'./image/1.png'} />
        </div>
  );
}

export default Login;