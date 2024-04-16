import "./Navbar.css"
import React from 'react'
import{Link} from 'react-router-dom'


const Navbar = () =>{
    return(
        <div className="header">
            <ul className="nav-menu">
                <li>
                <Link to="/">
                <h1 className="text"> KW StartApp </h1>
                </Link>
                </li>
            
            </ul>
            
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">Business</Link>
                </li>
                <li>
                    <Link to="/register">Learning</Link>
                </li>
                <li>
                    <Link to="/gallery">Art</Link>
                </li>
                <li>
                    <Link to="/aboutus">Job and Training</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;