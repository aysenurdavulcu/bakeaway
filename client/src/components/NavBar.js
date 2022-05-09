import "../Styles/navstyle.css"
import { Link } from 'react-router-dom';
import React, {useState } from "react";
export default function Navbar() {

  return (


      <div className='navbar'>

          {/* <img className='nav-img' src={BackgroundImage} alt='NYC Apartments' /> */}

          <div className='nav-buttons'>
              <div className='nav-home-btn'> <Link to='/'>BakeAway </Link></div>
              <div className='nav-cart-btn'> <Link to='/cart'>Cart </Link></div>
              <div className='nav-login-btn'> <Link to='/Login'>Login </Link></div>

          </div>

      </div>
  )
}