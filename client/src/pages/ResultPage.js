import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ResultPage.css"
import NavBar from "../components/NavBar";
import cupcakes from "../images/cupcakes.jpeg"
export default function ResultPage(){
    return(
        <div className = "resultspage">
        <NavBar isLoggedIn={false} whiteBg={false} />
        <h2 className="display">Displaying results for: {localStorage.getItem("Zipcode")}</h2>
        <div className = "results">
            
             
             <div className ="bakedgood">
            
                 <img className = "cupcake-image" src = {cupcakes}/>
                <p>Chocolate Cupcakes <br/>
                Kate S.<br/>
                $1.25/each <br/>
                11235
                </p>
            </div>
            <div className ="bakedgood">
            
            <img className = "cupcake-image" src = {cupcakes}/>
           <p>Chocolate Cupcakes <br/>
           Kate S.<br/>
           $1.25/each <br/>
           11235
           </p>
       </div>
       <div className ="bakedgood">
            
            <img className = "cupcake-image" src = {cupcakes}/>
           <p>Chocolate Cupcakes <br/>
           Kate S.<br/>
           $1.25/each <br/>
           11235
           </p>
       </div>
       <div className ="bakedgood">
            
            <img className = "cupcake-image" src = {cupcakes}/>
           <p>Chocolate Cupcakes <br/>
           Kate S.<br/>
           $1.25/each <br/>
           11235
           </p>
       </div>
       <div className ="bakedgood">
            
            <img className = "cupcake-image" src = {cupcakes}/>
           <p>Chocolate Cupcakes <br/>
           Kate S.<br/>
           $1.25/each <br/>
           11235
           </p>
       </div>
       <div className ="bakedgood">
            
            <img className = "cupcake-image" src = {cupcakes}/>
           <p>Chocolate Cupcakes <br/>
           Kate S.<br/>
           $1.25/each <br/>
           11235
           </p>
       </div>
       <div className ="bakedgood">
            
            <img className = "cupcake-image" src = {cupcakes}/>
           <p>Chocolate Cupcakes <br/>
           Kate S.<br/>
           $1.25/each <br/>
           11235
           </p>
       </div>
             </div>
             </div>

    )
}