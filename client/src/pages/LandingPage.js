import React from "react";
import { Link } from "react-router-dom";
export default function LandingPage(){
    return(
        <div id = "landing">
             <h2 id="slogan">Cakes and bakes</h2>
             <button> <Link to = "/results"> Results</Link> </button>
        </div>

    )
}