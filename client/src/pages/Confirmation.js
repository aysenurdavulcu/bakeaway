import React from "react";
import { Link } from "react-router-dom";
export default function Confirmation(){
    return(
        <div id = "confirmation">
             <h2 id="slogan">Confirmation Page</h2>
             <button> <Link to = "/"> Landing Page</Link> </button>
        </div>

    )
}