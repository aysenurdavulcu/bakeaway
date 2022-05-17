import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ConfirmationPage.css";
import NavBar from "../components/NavBar.js";
import thankyou from "../images/thankyou.png";
export default function ConfirmationPage(){
    return(
        <div id = "class">
         <NavBar/>
   
        <div id = "confirmation">
             {/* <h2 id="slogan">Confirmation Page</h2> */}
             <p className="Thank-you-msg"> Thank you for your order!</p>
             <p className="Confirmation-msg">Confirmation number #14223DKJ32</p>
             
          <Link to="/results">
          <input className = "confirmation-icon" alt = "cupcakeicon"type = "image" src = {thankyou}></input>
          </Link>
          <div className = "browsing-btn">
              <Link to= "/results">
              Continue browsing
                  </Link>
             </div>
        </div>
        
        </div>

    )
}