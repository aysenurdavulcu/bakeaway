import React from "react";
import NavBar from "../components/NavBar.js";
import { Link } from "react-router-dom";
import "../Styles/Dashboard.css"
import NewPost from "../components/NewPost.js"
import foodready from "../images/foodready.jpg"
import {useState, useEffect} from 'react'
import trashcan from "../images/trashcan.png";
export default function Dashboard(){
    const [deleteItem, setDeleteItem] = useState()
    const [sellerGoods, setSellerGoods] = useState([])
    console.log(sellerGoods);

   const handleDelete = e =>{
        console.log(e.target.getAttribute("goodsid"));
        localStorage.setItem("goodsid", e.target.getAttribute("goodsid"))
       deleteData();
        // window.location.reload(false);
       setDeleteItem(localStorage.getItem("goodsid"));
        
    }
    const deleteData = async () => {
        try{
            // localStorage.getItem("goodsid")
            // console.log('deleteData id' , id)
            let res = await fetch(`http://localhost:8080/api/removeItem/goodsid/${localStorage.getItem("goodsid")}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            let resJson = await res.json();
            console.log(resJson)
            // alert('Deleted')
            
        } catch (err) {
            console.log(err.message)
        }
    }



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
    },[deleteItem])
    

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
                            <input className="delete-button" goodsid = {item.GoodsID} type = 'image'  src = {trashcan} onClick = {handleDelete}/> 
                            
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