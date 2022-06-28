import React from "react";
import { useParams } from "react-router-dom";
import Show from "./show";

class Update extends React.Component
{
    constructor(props){
        super(props);
        const url = new URL(window.location.href);
        this.state  = {
            id: url.searchParams.get('id'),
            name:'',
            email:''
        }
    }

    handleInput = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
        
    }
    async componentDidMount(){

        const api = await fetch(`http://127.0.0.1:8000/api/userss/${this.state.id}`);
        const data = await api.json();

        this.setState({
            
            name:data.name,
            email:data.email
        })
console.log(this.state.id)
        
    }

    saveData = async (e)=>{
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: e.target.name.value , email:e.target.email.value })
        };

       const response = await fetch(`http://127.0.0.1:8000/api/update/${this.state.id}` ,requestOptions );
       
       if(response.ok){
        alert('Data Updated Successfully');
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
                <button type="submit" className="btn btn-primary">Update</button>
                </form>

            </div>
        );
    }
}

export default Update;