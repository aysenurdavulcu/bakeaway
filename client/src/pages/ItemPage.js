import React from "react";
import NavBar from "../components/NavBar";
import "../Styles/ItemPage.css"
import foodready from "../images/foodready.jpg"
import cartbutton from "../images/cartbutton.png"
import { Link } from "react-router-dom";

export default function ItemPage(){
    const itemInfo = JSON.parse(localStorage.getItem("itemclicked"));
    
    return(
        <div className = "item-page"><NavBar isLoggedIn={false} whiteBg={false} />
           <div className = "item">
            <img className = "item-image"  alt = "foodimg" src = {foodready}></img>
            <div className = "item-info">
                <p className="item-title">{itemInfo.Name}</p>
                <p>
                    {itemInfo.Description}
                </p>
                <p className = "item-price">Price: ${itemInfo.Price}</p>
                <Link to="/cart">
          <input className = "cart-button" type = "image" alt = "img" src = {cartbutton}></input>
          </Link>
                </div>
            </div>
        </div>
    )
    }