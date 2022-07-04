import React from "react";
import {NavLink} from 'react-router-dom'
class Nav extends React.Component
{

    constructor(props){
        super(props);
        
    }

    render(){
        console.log(this.props)
        return(
            <div style={{backgroundColor:this.props.color.color , color:'white'}}>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" >Navbar</NavLink>

                
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-Link mx-2"  to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-Link mx-2"  to="/login" >Login</NavLink>
                        </li>
                    </ul>

                    
                </div>
        </nav>
        </div>
        );
    }
}

export default Nav;