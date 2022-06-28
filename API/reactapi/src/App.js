import React from "react";
import Form from "./components/form";
import Show from "./components/show";
import Update from "./components/update";
import {BrowserRouter,Router, Routes ,Route ,Switch} from 'react-router-dom';


class App extends React.Component
{
  

  render(){
    
    return(
      <BrowserRouter>
      <div>
        <Form />
        <Show />
      </div>
      <Routes>
          <Route path="/update" element={<Update />}/>
      </Routes>
      </BrowserRouter>
    );
  }
}

export default App;