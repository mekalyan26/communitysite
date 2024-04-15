import "./Footer.css"
import React from 'react'

const Footer = () =>{
    return(
<footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Social</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">faq</a></li>

  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Cultural</h4>
  	 			<ul>
  	 				<li><a href="#">events</a></li>
  	 				<li><a href="#">Buy me a coffee</a></li>
  	 			</ul>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        
    )
};

export default Footer;