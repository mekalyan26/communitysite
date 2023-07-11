import "./Navbar.css"
import React from 'react'
import{Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        <div className="header">
            <Link to="/">
                <h1>KWGC Social</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/aboutus">AboutUs</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;