import {Link} from 'react-router-dom'

const Nav =()=>{

    return(
        <nav className="navbar navbar-expand-lg bg-dark text-white">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to='/' className="nav-link" >Home</Link>
                    </li>
                    <li >
                    <Link to='/about' className="nav-link">About</Link>
                    </li>
                    <li >
                    <Link to='/list' className="nav-link">List</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;