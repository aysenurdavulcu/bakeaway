import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Cart.css"
export default function Cart(){
    return(
        <div id = "cart">
             <h2 id="slogan">Cart</h2>
             <button> <Link to = "/confirmation"> Confirmation</Link> </button>
        </div>

    )
}