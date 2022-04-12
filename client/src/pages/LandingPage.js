import React from "react";
import { Link } from "react-router-dom";
import "../Styles/LandingPage.css"
export default function LandingPage(){
    return(
        <div id = "landing">
             <h2 id="slogan">Cakes and bakes</h2>
             <form>
  <label>
   Enter Zipcode:
    <input type="text" name="zipcode" />
  </label>
  <button> <Link to = "/results"> Search</Link> </button>
</form>
         
        </div>

    )
}