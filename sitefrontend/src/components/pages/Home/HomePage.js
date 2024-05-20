import React from "react";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="grid">
      <section className="section-1">
        <h5> !! Announcement !!</h5>
        <p className="section1-text">
          KWGC Bengali Cultural Group needs more volunteers. Want to be part of
          the vibrant culture , come join us email :
          kwgcbengaliculturalgroup@gmail.com
        </p>
      </section>

      <section className="section-2">
        <h5>Upcomming Event</h5>
        <p className="section1-text">Summer Picnic 2024</p>
     

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.5810958402494!2d-80.57270182337615!3d43.490211862956556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf1321e17227b%3A0x4a92c3229e770e80!2sLaurel%20Creek%20Conservation%20Area!5e0!3m2!1sen!2sca!4v1716237385035!5m2!1sen!2sca"></iframe>
     
      </section>

      <section className="section-3">
        <h5> ~ Sponsorship ~</h5>
        <p className="section1-text">
          <i>Email</i> : kwgcbengaliculturalgroup@gmail.com
        </p>
      </section>
    </div>
  );
};

export default HomePage;
