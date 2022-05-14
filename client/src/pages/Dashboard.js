import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../Styles/Dashboard.css"
import NewPost from "../components/NewPost"

export default function Dashboard(){

    function message(){
        if(localStorage.getItem("UserType") == "buyer"){
            return (<p className="dash-msg">Thank you for choosing to shop at BakeAway!<br/> We're glad you're here :))
                </p>)
        }else if(localStorage.getItem("UserType") == "seller"){
            return (
            <div>
                <p className="dash-msg">
                    We're proud to work with talented Bakers like yourself! You're the best part about BakeAway :)
                </p>
                <NewPost/>
            </div>
            )
        }else{
            return (<p className="dash-msg">Hmmm...seems like you're trying to access something you're not allowed to.
            </p>)
        }
    }
        // if(localStorage.getItem("LoginStatus") != "true"){
        //     return (<p>Hmmm...seems like you're trying to access something you're not allowed to. 
        //                 Please login to access this page.
        //             </p>)
        // }
    window.onstorage = () => {
        // When local storage changes...
        message()
      };

    return(
        <div>
            <NavBar/>
            
            {message()}
        </div>
    )
}