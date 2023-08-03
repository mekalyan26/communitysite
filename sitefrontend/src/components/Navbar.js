import "./Navbar.css"
import React from 'react'
import{Link} from 'react-router-dom'
import img1 from '../images/socialkolkata.jpg'
import pjpg from '../images/1.jpg'
import gjpg from '../images/2.jpg'

const Navbar = () =>{
    return(
        <div className="header">
            <ul className="nav-menu">
                <li>
                <Link to="/">
                <h1 className="text">KWGC Cultural Group</h1>
                </Link>
                </li>
            
            </ul>
            
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
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