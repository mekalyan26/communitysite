import "./MainContent.css"
import React from 'react'


const MainContent = () =>{
    return(
        <div className="wrapper">
        <section className="columns">
            <div className="column">
                <h2>2022 Events</h2>
                <p>This is where we list all happened last events</p>
            </div>
            <div className="column">
                <h2>Current Month Events</h2>
                <p>Basanta Utsav May 21 - Sponsors contact</p>
            </div>
            <div className="column">
                <h2>2023 Events</h2>
                <p>Community Picnic</p>
                <p>Durga Puja</p>
            </div>
        </section>
        </div>
        )
};

export default MainContent;