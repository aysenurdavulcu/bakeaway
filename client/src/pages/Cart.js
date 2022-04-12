import React from "react";
import { Link } from "react-router-dom";
export default function Cart(){
    return(
        <div id = "landing">
             <h2 id="slogan">Cart</h2>
             <button> <Link to = "/confirmation"> Confirmation</Link> </button>
        </div>

    )
}