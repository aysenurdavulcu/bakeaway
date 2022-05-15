import React from "react";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import "../Styles/Cart.css"
import NavBar from "../components/NavBar";
import checkoutbutton from "../images/checkoutbutton.png"
import pinkArrowIcon from "../images/pinkArrowIcon.png"

export default function Cart(props){
  console.log(props)
  console.log(props.cart)
  var totalAmnt = 0.00;
  const [total, setTotal] = useState(totalAmnt);
  
  useEffect(() => {
    setTotal(totalAmnt)
  }, [totalAmnt, props.cart])
    return(
      <div className = "cartPage">
      <NavBar/>
      <div className = "cart">
      <Link to="/item">
                <input className = "return-to-results-btn" type = "image" alt = "img" src = {pinkArrowIcon}></input>
            </Link>
        <table className = "cart-table">
            <td className = "cart-title">Product</td>
            <td className = "cart-title align-center">Seller</td>
            <td className = "cart-title align-center">Zipcode</td>
            <td className = "cart-title align-center">Price</td>
            <td className = "cart-title align-center">Quantity</td>
        
        {props.cart.map((item) =>{
                    totalAmnt += parseFloat(item.Price)*item.Quantity;
                    
                    return(
                    <tr className = "cart-row">
                      <td className = "cart-item">{item.Name}</td>
                      <td className = "cart-item align-center">{item.Seller}</td>
                      <td className = "cart-item align-center">{item.Zipcode}</td>
                      <td className = "cart-item align-center">${item.Price}/each</td>
                      <td className = "cart-item align-center">{item.Quantity}</td>
                    </tr>
                    
                    );
                })}
      </table>
      </div>
      <div className = "cart-checkout">
      <div className= "cart-total">
            <p>Total: ${total.toFixed(2)}</p>
          </div>
          
          <Link to="/checkout">
          <input className = "cart-checkout-icon" type = "image" src = {checkoutbutton}></input>
          </Link>
          </div>
        </div>

    )
}