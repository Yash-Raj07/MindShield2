import React from "react";
import navCSS from "./../Nav/Nav.module.css"
function Nav(){
  return(
    <div className={navCSS.Nav_wrapper}>
      <div className={navCSS.logo}>
        <i className="ri-restaurant-2-line"></i>
        <a href="#">MindShield</a>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#register">Register</a></li>
      </ul>

      
      <div className={navCSS.nav_btns}>
        
        <button >Sign in</button>
       <i className="ri-menu-3-line"></i>

      </div>
      
    </div>
  )
}

export default Nav