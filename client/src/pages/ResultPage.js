import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ResultPage.css"
import NavBar from "../components/NavBar";
export default function ResultPage(){
    return(
        <div id = "class">
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div id = "results">
             <h2 id="slogan">Displaying results for: {localStorage.getItem("Zipcode")}</h2>

             </div>
             </div>

    )
}