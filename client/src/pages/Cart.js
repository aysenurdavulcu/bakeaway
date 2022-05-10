import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Cart.css"
import NavBar from "../components/NavBar";
import checkoutbutton from "../images/checkoutbutton.png"
export default function Cart(){
    return(
      <div className = "cartPage">
      <NavBar isLoggedIn={false} whiteBg={false} />
      <div className = "cart">
        <div className = "cart-title">
           <p className = "cart-title-product">Product</p>
            <p className = "cart-title-seller">Seller</p>
            <p className = "cart-title-zipcode">Zipcode</p>
            <p className = "cart-title-price">Price</p>
            <p className = "cart-title-quantity">Quantity</p>
         </div>
          <div className = "cart-item">
            <p className = "cart-item-property">Red Velvet Cupcakes</p>
            <p className = "cart-item-property">John R.</p>
            <p className = "cart-item-property">11229</p>
            <p className = "cart-item-property">$1.25/each</p>
            <p className = "cart-item-property">5</p>
          </div>
          <div className = "cart-item">
            <p className = "cart-item-property">Red Velvet Cupcakes</p>
            <p className = "cart-item-property">John R.</p>
            <p className = "cart-item-property">11229</p>
            <p className = "cart-item-property">$1.25/each</p>
            <p className = "cart-item-property">5</p>
          </div>
          <div className = "cart-item">
            <p className = "cart-item-property">Red Velvet Cupcakes</p>
            <p className = "cart-item-property">John R.</p>
            <p className = "cart-item-property">11229</p>
            <p className = "cart-item-property">$1.25/each</p>
            <p className = "cart-item-property">5</p>
          </div>
      </div>
      <div className = "cart-checkout">
      <div className= "cart-total">
            <p>Total: $24.23</p>
          </div>
          
          <Link to="/checkout">
          <input className = "cart-checkout-icon" type = "image" src = {checkoutbutton}></input>
          </Link>
          </div>
        </div>

    )
}