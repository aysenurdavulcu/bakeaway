import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react"
import "../Styles/LandingPage.css"
import NavBar from "../components/NavBar";

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
      <div id = "class"><NavBar isLoggedIn={false} whiteBg={false} />
        <div id = "landing">
             <h2 id="slogan">Cakes and bakes</h2>
            <form onSubmit={handleSubmit}>
              <label>
                <input 
                  type="text" 
                  placeholder="Enter Zipcode"
                  name="zipcode" 
                  value={zipcode}
                  onChange={handleChange}
                />
              </label>
              <button>Search</button>
            </form>

        </div>
        </div>


    )
}