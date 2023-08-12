import React from 'react'
import "./Events.css";


export const HomePage = () => {
    return (
        <div class="main">
            <h3 class="heading"> Events </h3>

            <div class="Timeline">
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
                <div className="column">
                    <h2>2023 Events</h2>
                    <p>Community Picnic</p>
                    <p>Durga Puja</p>
                </div>
            </div>
        </div>



    )
}

export default HomePage;
