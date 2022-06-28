import React from "react";
import Form from "./components/form";
import Show from "./components/show";
import {BrowserRouter, Routes ,Route} from 'react-router-dom';


class App extends React.Component
{
  

  render(){
    
    return(
      <BrowserRouter>
      <div>
        <Form />
        <Show />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;