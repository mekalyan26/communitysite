import "./Registeration.css"
import React from 'react'


const MainContent = () => {
    return (
        <div className="mainRegister">
            <div>
                <h1 className="maintext">Register</h1>
                
                <label for="email" className="text"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />

                <label for="psw" className="text"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                <label for="psw-repeat" className="text"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />


                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button type="submit" className="registerbtn">Register</button>
            </div>
        </div>
    )
};

export default MainContent;