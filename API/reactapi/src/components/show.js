import React from "react";
import {Link} from 'react-router-dom'

class Show extends React.Component 
{
    constructor(){
        super();
        this.state ={
            name:'',
            id:'',
            users:[]

        }
    }
    getApi =async ()=>{

        const api = await fetch('http://127.0.0.1:8000/api/userss');
        const getData = await api.json();

        this.setState(this.state.users=getData);

        
    }
    componentDidMount(){
        this.getApi();

    }
    handleSearch =(e)=>{
 

            this.setState({ name: e.target.value });

    }

    render(){
        
        return(
            <div className="container">
                <input  className="form-control mt-3" type="text" onChange={this.handleSearch}  placeholder="Search .. "/>
                <table className="table mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
               <tbody>
                {this.state.users.filter((user)=>user.name.includes(this.state.name)).map((user)=>{
                    return(
                       
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/update?id=${user.id}`}  className="m-1">Update</Link>
                                    <Link to={`/delete/${user.id}`} className="m-1">Delete</Link>
                                </td>
                            </tr>
                      
                            );
                })}
                </tbody>
                 </table>
            </div>
        );
    }
}



export default Show;