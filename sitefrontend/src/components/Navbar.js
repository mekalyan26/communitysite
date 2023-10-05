import "./Navbar.css"
import React from 'react'
import{Link} from 'react-router-dom'


const Navbar = () =>{
    return(
        <div className="header">
            <ul className="nav-menu">
                <li>
                <Link to="/">
                <h1 className="text">KWGC Bengali Cultural Group</h1>
                </Link>
                </li>
            
            </ul>
            
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/register">Sponsorship</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/aboutus">AboutUs</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;