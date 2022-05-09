import React from "react";
import NavBar from "../components/NavBar";
import "../Styles/ItemPage.css"
import cupcakes from "../images/cupcakes.jpeg"
import cartbutton from "../images/cartbutton.png"
import { Link } from "react-router-dom";
export default function ItemPage(){
    return(
        <div className = "item-page"><NavBar isLoggedIn={false} whiteBg={false} />
           <div className = "item">
            <img className = "item-image" src = {cupcakes}></img>
            <div className = "item-info">
                <p className="item-title">Chocolate Cupcakes</p>
                <p>
                    Description: Yummy cupcakes okmdkoafklnsdklfjslkdfsldf
                    afksnamflksjdfjsdkofjkldnfjklndfjnbs
                    askfnkdfnlksdfjksdlkfjklsdjfklsdjfjsf 
                </p>
                <p className = "item-price">Price: $1.25</p>
                <Link to="/cart">
          <input className = "cart-button" type = "image" src = {cartbutton}></input>
          </Link>
                </div>
            </div>
        </div>
    )
    }