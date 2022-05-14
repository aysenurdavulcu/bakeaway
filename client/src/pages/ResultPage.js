import React from "react";
import {useState, useEffect} from 'react'
import { Link, useNavigate} from "react-router-dom";
import "../Styles/ResultPage.css"
import NavBar from "../components/NavBar";
import cupcakes from "../images/cupcakes.jpeg"


export default function ResultPage(){

    let navigate = useNavigate()

    const [goodsData, setGoodsData] = useState([])

    const fetchData = async () => {
        try {
            const result = await fetch(`http://localhost:8080/api/allGoods/zipcode/${localStorage.getItem("Zipcode")}`)
            const resultObj = await result.json()
            const resultObjData = resultObj.data
            setGoodsData(resultObjData)
        } catch (err) {
            console.log(err.message)
        }
    }
    const handleClick = e => {
       // const goodsID = e.target.getAttribute("goods-id");
        console.log(e);
        // console.log(goodsID);

      };

    useEffect(() =>{
        fetchData();
    },[])

    return(
        <div className = "resultspage">
        <NavBar/>
        <h2 className="display">Displaying results for "{localStorage.getItem("Zipcode")}"</h2>
        <div className = "results">
        
                {/* {checkData} */}
                {goodsData.map((item) =>{
                    return(
                        // localStorage.setItem("ItemClicked", item.Name)
                        <div className ="bakedgood" goods-id={item.Name} onClick={handleClick}>
                            <img className = "cupcake-image" src = {cupcakes}/>
                            <p className="bakedgood-text" key={item}>
                                {item.Name}<br/>
                                {item.Seller}.<br/>
                                ${item.Price}/each<br/>
                                {item.Zipcode}<br/>
                            </p>
                        </div>
                    );
                })}
                
             </div>
             </div>

    )
}