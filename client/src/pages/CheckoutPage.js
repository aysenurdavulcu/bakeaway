import React from "react";
import { Link } from "react-router-dom";
import "../Styles/CheckoutPage.css";
import NavBar from "../components/NavBar";
import placeorderbutton from "../images/placeorderbutton.png"
import Confirmationicon from "../images/confirmationicon.png";
import { useState } from "react";
export default function CheckoutPage(){
    const [shippingAddress, setShippingAddress]= useState({
        shippingLine1:"",
        city:"",
        state:"",
        zipcode:"",
        })
    const [billingAddress, setBillingAddress]= useState({
        billingLine1:"",
        city:"",
        state:"",
        zipcode:"",
    })
    const [paymentInfo, setPaymentInfo]= useState({
        cardNumber:"",
        cardExpiration:"",
        cardCVV:""
    })
        function handleChangeShipping(event){
            // console.log(event.target.name);
            // console.log(event.target.value);
            setShippingAddress(prevData =>{
                return{
                    ...prevData,
                    [event.target.name] : event.target.value
                }
            })
            console.log(shippingAddress);
        }
        function handleSubmitShipping(event){
            event.preventDefault();
            console.log(shippingAddress);

        }
        function handleChangeBilling(event){
            // console.log(event.target.name);
            // console.log(event.target.value);
            setBillingAddress(prevData =>{
                return{
                    ...prevData,
                    [event.target.name] : event.target.value
                }
            })
            console.log(billingAddress);
        }
        function handleSubmitBilling(event){
            event.preventDefault();
            console.log(billingAddress);

        }

        function handleChangePayment(event){
            // console.log(event.target.name);
            // console.log(event.target.value);
            setPaymentInfo(prevData =>{
                return{
                    ...prevData,
                    [event.target.name] : event.target.value
                }
            })
            console.log(paymentInfo);
        }
        function handleSubmitPayment(event){
            event.preventDefault();
            console.log(paymentInfo);

        }
    return(
        
        <div id = "Checkout-page">
         <NavBar isLoggedIn={false} whiteBg={false} />

         <h1 className="checkout-msg">Payment Information</h1>
         
         <div className="shipping-billing-info">
         <div className="Shipping-info">
            <p className="Shipping-address">Shipping Address</p>
            <form onSubmit={handleSubmitShipping}>  
                <input className="input-textbox" type = "text" name= "shippingLine1" placeholder= "123 Main St" onChange={handleChangeShipping}></input>
                <input className="input-textbox" type = "text" name= "city" placeholder= "Brooklyn" onChange={handleChangeShipping}></input>
                <input className="input-textbox" type = "text" name= "state" placeholder= "New York" onChange={handleChangeShipping}></input>
                <input className="input-textbox" type = "number" name= "zipcode" placeholder= "11235" onChange={handleChangeShipping}></input>
                <button className="save-ship">Submit</button> 
            </form>
         </div>
         <div className="Billing-Info">
             <form onSubmit={handleSubmitBilling}>  
             <p className="Billing-address">Billing Address</p>  
                <input className="input-textbox" type = "text" name= "billingLine1" placeholder= "123 Main St" onChange={handleChangeBilling}></input>
                <input className="input-textbox" type = "text" name= "city" placeholder= "Brooklyn" onChange={handleChangeBilling}></input>
                <input  className="input-textbox" type = "text" name= "state" placeholder= "New York" onChange={handleChangeBilling}></input>
                <input className="input-textbox" type = "number" name= "zipcode" placeholder= "11235" onChange={handleChangeBilling}></input>
                <button className="save-bill">Submit</button> 
            </form>
         </div>
         </div>
         <div className="Payment-info">
                  <form onSubmit={handleSubmitPayment}>  
                  <p className="payment-info">Payment Information</p>  
                <input className="input-textbox" type = "number" name= "cardNumber" placeholder= "XXXX XXXX XXXX XXXX" onChange={handleChangePayment}></input>
                <input className="input-textbox" type = "number" name= "cardExpiration" placeholder= "MMYYYY" onChange={handleChangePayment}></input>
                <input className="input-textbox" type = 
                "number" name= "cardCVV" placeholder= "CVV" onChange={handleChangePayment}></input>
                <button className="save-payment">Submit</button> 
            </form>
         </div>
         <Link to="/confirmation">
          <input className = "place-order-icon" type = "image" src = {placeorderbutton}></input>
          </Link> 
          {/* <p className="checkout-text">Place Order</p>   */}
          <div className = "checkout-text">
              <Link to= "/confirmation">
                Place Order
                  </Link>
                  </div>
   </div>
   
    )
}