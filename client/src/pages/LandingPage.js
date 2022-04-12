import React from "react";
import { Link } from "react-router-dom";
import "../Styles/LandingPage.css"
import NavBar from "../components/NavBar";
export default function LandingPage(){
    return(
      <div id = "class"><NavBar isLoggedIn={false} whiteBg={false} />
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
        </div>
        

    )
}