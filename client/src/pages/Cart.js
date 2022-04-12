import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Cart.css"
import NavBar from "../components/NavBar";
export default function Cart(){
    return(
      <div id = "class">
      <NavBar isLoggedIn={false} whiteBg={false} />
        <div id = "cart">
             <h2 id="slogan">Cart</h2>
             {/* <div id = "placeorder">
            
             </div> */}
             <div class='some-page-wrapper'>
  <div class='row'>
    <div class='column'>
      <div class='blue-column'>
        Order info
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
      Amount and price
      <div id = "placeorder">
      <button> <Link to = "/confirmation"> Place Order</Link> </button>
      </div>
      </div>
    </div>
  </div>
</div>
</div>
        </div>

    )
}