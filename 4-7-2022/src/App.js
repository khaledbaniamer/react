import React ,{createContext} from "react";
import Home from "./components/home";
import Nav from "./components/nav";

import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "./components/login";


export const colorContext = createContext();

class App extends React.Component
{
  constructor(){
    super();
    this.state = {
      color:'',
      setColor:this.setColor,
    }
  }

  setColor = (color)=>{
    this.setState({color:color});
    // console.log(this.state)
  }

  render(){
    return(
      <BrowserRouter >
        <Nav color={this.state}/>

      <colorContext.Provider value={this.state} >
        <Home />
      </colorContext.Provider>
      <Routes>
        <Route path="/login" element={<Login />}/>
      </Routes>

      </BrowserRouter>
    );
  }
}

export default App;
