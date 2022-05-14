import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../Styles/ConfirmationPage.css";

export default function LogoutPage(){

    localStorage.setItem("LoginStatus", "false");
    localStorage.setItem("FirstName", "");
    localStorage.setItem("LastName", "");
    localStorage.setItem("UserType", "")

    return(
        <div id = "class">
         <NavBar/>
   
        <div id = "confirmation">
             <p className="Thank-you-msg"> You have successfully logged out!</p>
        </div>
        
        </div>

    )
}