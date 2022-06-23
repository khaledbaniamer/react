import React, {useState} from 'react';
import Navbar from './components/navbar';
import Home  from './components/home';
import About from './components/about';
import {BrowserRouter ,Routes , Route} from 'react-router-dom';
import './app.css';

function AppFunction (){
//   constructor(props){
//     super(props);
//     this.state = {
//       name:'khaled',
//       email:'khaled@gmail.com',
//       phone:'0777785585'
//     }
//   }

const [name , setName] = useState('kahled');
const [email , setEmail] = useState('kahled@gmail.com');
const [phone , setPhone] = useState('0777785585');

{

    return (
      <BrowserRouter>
  
      <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
        </BrowserRouter>
    );
  }
}

export default AppFunction;
