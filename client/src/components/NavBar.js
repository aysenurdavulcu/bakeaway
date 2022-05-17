import "../Styles/navstyle.css"
import { Link } from 'react-router-dom';
import React, {useState, useEffect } from "react";
import Login from "../pages/LoginPage.js";
import ProfileIcon from "../images/profileIcon.png"
export default function Navbar() {

    //const [loginStatus, setLoginStatus] = useState();

    //var loginOrOut = <div className='nav-login-btn'> <Link to='/Login'>Login</Link></div>
    function checkLoginStatus(){
        //console.log(localStorage.getItem("LoginStatus"))
        if(localStorage.getItem("LoginStatus") == "true"){
           // alert("logged in")
            return (<div className='nav-login-btn'> <Link to='/Logout'>Logout </Link></div>)
        }else{
           // alert("NOT logged in")
            return (<div className='nav-login-btn'> <Link to='/Login'>Login</Link></div>)
          
        } 
    }
    function welcomeMessage(){
        if(localStorage.getItem("LoginStatus") == "true"){
            // alert("logged in")
             return (<div className='nav-login-btn '> <p className="nav-welcome-msg">Welcome, {localStorage.getItem("FirstName")}</p></div>)
         }
    }
    function profileIcon(){
        if(localStorage.getItem("LoginStatus") == "true"){
            // alert("logged in")
             return (<Link to="/Dashboard"><img className="profileIcon" src={ProfileIcon}/></Link> )
         }
    }

    window.onstorage = () => {
        // When local storage changes...
        checkLoginStatus()
        welcomeMessage()
        profileIcon()
      };
    // useEffect(()=>{
        
    //     window.addEventListener("storage", () => {
    //         // When storage changes refetch
    //        // refetch();
    //        checkLoginStatus()
    //       });
    // },[localStorage.getItem("LoginStatus")])
  return (


      <div className='navbar'>

          {/* <img className='nav-img' src={BackgroundImage} alt='NYC Apartments' /> */}

          <div className='nav-buttons'>
              <div className='nav-home-btn'> <Link to='/'>BakeAway </Link></div>
              
              {welcomeMessage()}
              {profileIcon()}
              <div className='nav-cart-btn'> <Link to='/cart'>Cart </Link></div>
              {checkLoginStatus()}

          </div>
          

      </div>
  )
}