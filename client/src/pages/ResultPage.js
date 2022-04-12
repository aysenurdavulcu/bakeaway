import React from "react";
import { Link } from "react-router-dom";
export default function ResultPage(){
    return(
        <div id = "landing">
             <h2 id="slogan">Results</h2>
             <button> <Link to = "/cart"> Go To Cart</Link> </button>
        </div>

    )
}