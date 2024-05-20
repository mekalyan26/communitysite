import React from "react";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="grid">
        
      <section>
        <h5 className='section-text'> !! Announcement !!</h5>
        <p >
          KWGC Bengali Cultural Group needs more volunteers.
          Want to be part of the vibrant culture , come join us
          email : kwgcbengaliculturalgroup@gmail.com
        </p>
      </section>

      <section>
        <h5 className='section-text'>Upcomming Event</h5>
        <p>
         Summer Picnic 2024 
        </p>
      </section>

      <section>
        
        <h5  className='section-text'>For Sponsorship</h5>
        <p>
        <i>Email</i> :  kwgcbengaliculturalgroup@gmail.com
        </p>
      </section>
    </div>
  );
};

export default HomePage;
