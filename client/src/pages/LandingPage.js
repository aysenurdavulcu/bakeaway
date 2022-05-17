import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react"
import "../Styles/LandingPage.css"
import NavBar from "../components/NavBar.js";
import searchicon from "../images/searchicon.png"
export default function LandingPage(){
    let navigate = useNavigate()
    const [zipcode, setZipcode] = useState("")

    console.log(zipcode)

    function handleChange(event){
      setZipcode(event.target.value)
    }
    function handleSubmit(event){
      event.preventDefault();
      console.log("Form Submitted")
      localStorage.setItem("Zipcode", zipcode)
      navigate('/results')

    }
    return(
      <div className = "landingpage"><NavBar isLoggedIn={false} whiteBg={false} />
        <div className = "landing">
             <h2 className="slogan">Cakes and bakes</h2>
            <form className = "zipcode-form" onSubmit={handleSubmit}>
              <label>
                <input className="input-zipcode" 
                  type="text" 
                  placeholder="Enter Zipcode"
                  name="zipcode" 
                  value={zipcode}
                  onChange={handleChange}
                />
              
                  {/* <button className="searchbutton"
                  type="submit"><img className= "searchimage" src = {searchicon}/></button> */}
              </label>
              <input className = "submiticon" type = "image" src = {searchicon}></input>
              </form>
  

        </div>
        </div>


    )
}