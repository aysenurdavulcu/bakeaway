import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ConfirmationPage.css";
import NavBar from "../components/NavBar";
export default function ConfirmationPage(){
    return(
        <div id = "class">
         <NavBar isLoggedIn={false} whiteBg={false} />
   
        <div id = "confirmation">
             <h2 id="slogan">Confirmation Page</h2>
             <p> Thank you for your order!</p>
             <button> <Link to = "/"> Landing Page</Link> </button>
        </div>
        </div>

    )
}