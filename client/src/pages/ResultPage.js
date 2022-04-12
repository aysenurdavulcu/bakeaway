import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ResultPage.css"
export default function ResultPage(){
    return(
        <div id = "results">
             <h2 id="slogan">Results</h2>
             <button> <Link to = "/cart"> Go To Cart</Link> </button>
        </div>

    )
}