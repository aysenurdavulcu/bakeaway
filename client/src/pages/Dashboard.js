import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../Styles/Dashboard.css"
import NewPost from "../components/NewPost"
import foodready from "../images/foodready.jpg"
import {useState, useEffect} from 'react'

export default function Dashboard(){
    const [sellerGoods, setSellerGoods] = useState([])
    console.log(sellerGoods);
    const fetchData = async () => {
        try {
            const result = await fetch(`http://localhost:8080/api/allgoods/sellerid/${localStorage.getItem("UserID")}`)
            const resultObj = await result.json()
            const resultObjData = resultObj.data
            setSellerGoods(resultObjData)
            console.log(resultObjData);
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() =>{
        fetchData();
    },[])

    function message(){
        if(localStorage.getItem("UserType") == "buyer"){
            return (<p className="dash-msg">Thank you for choosing to shop at BakeAway!<br/> We're glad you're here :))
                </p>)
        }else if(localStorage.getItem("UserType") == "seller"){
            // localStorage.setItem("sellerid", )
            
            return (
            <div>
                <p className="dash-msg">
                    We're proud to work with talented Bakers like yourself! You're the best part about BakeAway :)
                </p>
                <NewPost/>
                
                <div className="seller-items">
                {sellerGoods.map((item) =>{
                    return(
                    <div className="seller-item">
                    <img className = "cupcake-image" alt = "img"src = {foodready}  />
                            <p className="bakedgood-text">
                                {item.Name}<br/>
                               {item.Seller}<br/>
                              {item.Price}/each<br/>
                                {item.Zipcode}<br/>
                               
                            </p>
                            <button className="delete-button"> Delete button</button>
                    </div>
                    
                     );
                    })}
                    
                </div>
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