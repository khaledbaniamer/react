import React from "react";
import { colorContext } from "../App";

class Home extends React.Component
{
    

    constructor(props){
        super(props);
    }


    render(){
        
        return(
            <colorContext.Consumer>
                {({color , setColor})=>(
                    <div className="container">
                    <select className="form-control mt-5" onChange={(color)=>setColor(color.target.value)} >
                        <option value={''}>Choose Color</option>
                        <option value={'green'}>Green</option>
                        <option value={'black'}>Black</option>
                        <option value={'blue'}>Blue</option>

                    </select>
                        <h1>{this.context.color}</h1>
                    </div>
                    
                    // <button onClick={setColor} >color</button>
                    
                )}
              
            </colorContext.Consumer>
        );
    }
   
    
}

export default Home;