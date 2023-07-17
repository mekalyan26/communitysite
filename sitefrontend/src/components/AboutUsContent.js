import React from 'react'
import AboutUs from '../routes/AboutUs';
import "./AboutUsContent.css";
import Navbar from '../components/Navbar';

export const AboutUsContent = () => {
  return (
    <div class="main">
    <h3 class="heading">Responsive Timeline</h3>

    <div class="Timeline">
        <ul>
            <li>
                <h3 class="title">Front End Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                <a href="#">Read More </a>
                <span class="circle"></span>
                <span class="date">January 2022</span>
            </li>
            <li>
                <h3 class="title">Back End Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                <a href="#">Read More </a>
                <span class="circle"></span>
                <span class="date">February 2022</span>
            </li>
            <li>
                <h3 class="title">Full Stack Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                <a href="#">Read More </a>
                <span class="circle"></span>
                <span class="date">March 2022</span>
            </li>
            <li>
                <h3 class="title">App Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                <a href="#">Read More </a>
                <span class="circle"></span>
                <span class="date">April 2022</span>
            </li>
        </ul>
    </div>
</div>



  )
}

export default AboutUsContent;
