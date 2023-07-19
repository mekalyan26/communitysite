import React from 'react'
import AboutUs from '../routes/AboutUs';
import "./AboutUsContent.css";
import Navbar from '../components/Navbar';

export const AboutUsContent = () => {
  return (
    <div class="main">
    <h3 class="heading"> KWGC Timeline</h3>

    <div class="Timeline">
        <ul>
            <li>
                <h3 class="title">Durga Puja</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                <a href="#">Read More </a>
                <span class="circle"></span>
                <span class="date">October 2023</span>
            </li>
            <li>
                <h3 class="title">Durga Puja</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                <a href="#">Read More </a>
                <span class="circle"></span>
                <span class="date">September 2018</span>
            </li>
            <li>
                <h3 class="title">Durga Puja</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                <a href="#">Read More </a>
                <span class="circle"></span>
                <span class="date">September 2017</span>
            </li>
            <li>
                <h3 class="title">Durga Puja</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                <a href="#">Read More </a>
                <span class="circle"></span>
                <span class="date">October 2012</span>
            </li>
        </ul>
    </div>
</div>



  )
}

export default AboutUsContent;
