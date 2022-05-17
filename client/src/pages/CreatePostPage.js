import React from "react";
import { Link } from "react-router-dom";
import "../Styles/CreatePostPage.css";
import NavBar from "../components/NavBar.js";
import placeorderbutton from "../images/placeorderbutton.png"
import Confirmationicon from "../images/confirmationicon.png";
import { useState } from "react";
export default function CreatePostPage(){
    return(
        <div id = "CreatePost-page">
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div className="Create-post">
           <p>Create a post</p>
           <form>
               <input className="post-Name" type = "text" placeholder="Product Name"></input> <br/>
               <input className="post-SellerName" type = "text" placeholder="Seller Name"></input><br/>
               {/* <label htmlFor='post-image'> Images: </label>
               <input class='post-image' type='file' id='images' hidden/> */}
               <input className="post-description" type = "text" placeholder="Description"></input><br/>
               <input className="post-Price" type = "number" placeholder="Price"></input><br/>
               <input className="post-Zipcode" type = "number" placeholder="Zipcode"></input><br/>
               <input type="file" id="actual-btn" hidden/>
               <label className="uploadFile-btn" for="actual-btn">Upload Image</label><br/>
               <button className="save-post">Submit</button>
           </form>
        </div>
        </div>
    )
}