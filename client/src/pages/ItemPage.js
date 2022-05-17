import React from "react";
import NavBar from "../components/NavBar.js";
import "../Styles/ItemPage.css"
import foodready from "../images/foodready.jpg"
import cartbutton from "../images/cartbutton.png"
import { Link } from "react-router-dom";
import {useState} from 'react'
import pinkArrowIcon from "../images/pinkArrowIcon.png"

export default function ItemPage(props){
    console.log(props)
    console.log(props.prev)
    var exist=false;
    const itemInfo = JSON.parse(localStorage.getItem("itemclicked"));
    const newItem = {...itemInfo, "Quantity":1}
    console.log(newItem)

    const addItem = () => {

        props.prev.map((item) =>{
            console.log(item.GoodsID + "  " + newItem.GoodsID)
            if(item.GoodsID === newItem.GoodsID){
                // console.log("it exists")
                exist=true;
                // console.log(exist)
                // console.log(item)
                item.Quantity += 1;
            }
        })
        console.log(exist)
        if(!exist){
            props.setCart(prev =>( [...prev, newItem] ));
        }else{
            console.log("Already exists in cart. Quantity updated")
        }
        
    }

    return(
        <div className = "item-page">
            <NavBar/>
           <div className = "item">
           <Link to="/results">
                <input className = "return-to-results-btn" type = "image" alt = "img" src = {pinkArrowIcon}></input>
            </Link>
            <img className = "item-image"  alt = "foodimg" src = {foodready}></img>
            <div className = "item-info">
                <p className="item-title">{itemInfo.Name}</p>
                <p>
                    {itemInfo.Description}
                </p>
                <p className = "item-price">Price: ${itemInfo.Price}</p>
                <Link to="/cart">
                    <input className = "cart-button" type = "image" alt = "img" src = {cartbutton} onClick={addItem}></input>
                </Link>
                </div>
            </div>
        </div>
    )
    }

    //onClick={() => props.setCart(prev =>( [...prev, itemInfo] ))} 