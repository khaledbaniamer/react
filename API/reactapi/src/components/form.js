import React from "react";
import { Route } from "react-router-dom";
import Show from "./show";

class Form extends React.Component
{
    constructor(){
        super();
        this.state  = {
            
            name:'',
            email:''
        }
    }

    handleInput = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
        
    }

    saveData = async (e)=>{
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: e.target.name.value , email:e.target.email.value })
        };

       const response = await fetch("http://127.0.0.1:8000/api/add_person" ,requestOptions );
       
       if(response.ok){
        alert('Data Added Successfully');
        window.location.href = 'http://localhost:3000/';
       }else{
        alert('There is something wrong');
        window.location.href = 'http://localhost:3000/';
       }
        
    }
    render(){
        return(
            <div className="container">
                <h1>Form</h1>
                
                <form onSubmit={this.saveData} >
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" onChange={this.handleInput} value={this.state.name}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onChange={this.handleInput} value={this.state.email} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}

export default Form;