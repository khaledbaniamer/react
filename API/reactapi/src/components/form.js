import React from "react";

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
        console.log(e.target.name.value);
        console.log(e.target.email.value)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: e.target.name.value , email:e.target.email.value })
        };
       const response = await fetch("http://127.0.0.1:8000/api/add_person" ,requestOptions );
       console.log(response);
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
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" onChange={this.handleInput} value={this.state.name}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" onChange={this.handleInput} value={this.state.email} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;