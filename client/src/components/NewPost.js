import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar.js";
import "../Styles/NewPost.css"
import {useState} from 'react'

export default function NewPost(){
    let navigate = useNavigate()
    const [newPostData, setNewPostData] = useState({
        sellerID:localStorage.getItem("UserID"),
        sellerName:`${localStorage.getItem("FirstName")} ${localStorage.getItem("LastName").charAt(0)}`,
        productName : "",
        description : "",
        price: "",
        zipcode: "",
    });

    const postData = async () => {
        try {
            const data = { ...newPostData }
            let res = await fetch("http://localhost:8080/api/addProduct", {
                method: "POST",

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sellerID: newPostData.sellerID,
                    sellerName: newPostData.sellerName,
					productName: newPostData.productName,
					description: newPostData.description,
					price: newPostData.price,
					zipcode: newPostData.zipcode,
                }),
            });

            let resJson = await res.json();
            console.log(resJson)
			
			if(resJson.message == 'success'){
                console.log(`${newPostData.productName} was successfully added.`)
                navigate('/')
			
            } else {
				console.log(resJson.error)
				alert("Unable to add new product. Please try again.")
			}
			
        } catch (err) {
            console.log(err.message)
		}
		
    }
    console.log(newPostData);
    function handleChange(event){
        setNewPostData(prevData =>{
            return{
                ...prevData,
                [event.target.name ]: event.target.value
            }
        })
    }
    async function handleSubmit(e){
		e.preventDefault()
        console.log(newPostData)
        postData();
	}

    return(
        <div>
            <div className="new-post-box">
				
			<h1 className="new-post-msg">New Product</h1>

			<form className="new-post-form" onSubmit={handleSubmit}>
            <label>
					<input className="new-post-input"
					placeholder="Product Name"
                    type="text" 
                    name="productName"
					value={newPostData.productName}
					onChange={handleChange}
					/>
				</label>
                <label >
					<input className="new-post-input new-post-input-description"
					placeholder="Enter a description"
                    type="text" 
                    name="description"
					value={newPostData.description}
					onChange={handleChange}
					/>
				</label>
				<label >
					<input className="new-post-input"
					placeholder="Price per unit $"
                    type="text"
                    name="price"
					value={newPostData.price}
					onChange={handleChange}
					/>
				</label>
				<label >
					<input className="new-post-input"
					placeholder="Enter zipcode"
                    type="text" 
                    name="zipcode"
					value={newPostData.zipcode}
					onChange={handleChange}
					/>
				</label>
			
				<input type="submit" value="Add" className="new-post-submit-btn"/>
			</form>
            </div>
        </div>
    )
}