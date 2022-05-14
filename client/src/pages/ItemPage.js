import React from "react";
import NavBar from "../components/NavBar";
import "../Styles/ItemPage.css"
import foodready from "../images/foodready.jpg"
import cartbutton from "../images/cartbutton.png"
import { Link } from "react-router-dom";
export default function ItemPage(){
    return(
        <div className = "item-page"><NavBar isLoggedIn={false} whiteBg={false} />
           <div className = "item">
            <img className = "item-image"  alt = "foodimg" src = {foodready}></img>
            <div className = "item-info">
                <p className="item-title">Chocolate Cupcakes</p>
                <p>
                    Description: These super moist chocolate cupcakes pack TONS of chocolate
                     flavor in each cupcake wrapper! Made from simple everyday ingredients.
                </p>
                <p className = "item-price">Price: $1.25</p>
                <Link to="/cart">
          <input className = "cart-button" type = "image" alt = "img" src = {cartbutton}></input>
          </Link>
                </div>
            </div>
        </div>
    )
    }