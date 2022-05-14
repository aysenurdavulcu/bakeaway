import React from "react"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react"
import { Navigate } from "react-router";
import Navbar from "../components/NavBar"
import "../Styles/LoginPage.css"

export default function Login(){
	let navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        username : "",
        password : ""
	});
	
	const [checkLoginData, setCheckLoginData] = useState(null)


    //console.log(loginData);
    function handleChange(event){
        setLoginData(prevData =>{
            return{
                ...prevData,
                [event.target.name ]: event.target.value
            }
        })
    }
    async function handleSubmit(e){
		e.preventDefault()
		console.log(loginData)
		fetchData()
		console.log(checkLoginData[0].FirstName)
		if(checkLoginData != null){
			console.log(checkLoginData)
			console.log("user exists");
			localStorage.setItem("FirstName", checkLoginData[0].FirstName)
			localStorage.setItem("LastName", checkLoginData[0].LastName)
			localStorage.setItem("LoginStatus", true)
			localStorage.setItem("UserType", checkLoginData[0].Type)
			localStorage.setItem("UserID", checkLoginData[0].UserID)
			navigate("/");
		}else{
			console.log("user does NOT exists");
		};

		
	}
	
	const fetchData = async () => {
        try {
            const result = await fetch(`http://localhost:8080/api/allusers/${loginData.username}/${loginData.password}`)
            const resultObj = await result.json()
            const resultObjData = resultObj.data
			setCheckLoginData(resultObjData)
        } catch (err) {
            console.log(err.message)
        }
	}
	
	// useEffect(()=>{
	// 	console.log(checkLoginData)
	// 	if(checkLoginData == []){
	// 		if(checkLoginData[0].Username === loginData.username){
	// 			console.log("exists")
	// 		}else{
	// 			console.log("not exist")
	// 		}
	// 	}


	// },[checkLoginData])

	
	// useEffect(()=>{
	// 	if(redirect){
	// 		Navigate("/");
	// 	}

	// },[redirect])
	
	// function renderNavbar(){
	// 	return(
	// 		<Navbar/>
	// 	)
	// }
	// window.onstorage = () => {
    //     // When local storage changes...
    //     renderNavbar();
    // };
    return(
			<div>
			<Navbar/>
						
			<div className="login-box">
				
				{/* <img src={logo} className="logo"/> */}

				<h1 className="login-msg">Login to your account</h1>
			<form onSubmit={handleSubmit} className="login-form">
				<label className="login-username">
					<input className="login-input"
					placeholder="Username"
                    type="text"
                    name="username"
					value={loginData.username}
					onChange={handleChange}
					/>
				</label>
				<label className="login-password">
					<input className="login-input"
					placeholder="Password"
                    type="text" 
                    name="password"
					value={loginData.password}
					onChange={handleChange}
					/>
				</label>
				<input type="submit" value="Login" className="login-btns login-submit-btn"/>
				{/* <p className="login-OR"> or</p>

				<button className="login-btns login-google-btn">
					<img src={google_logo} className="google-logo"/> 
					<p className="google-text">Continue with Google</p>
				</button> */}
			</form>
			<p className="sign-up-msg"> 
					Dont have an account? <a href="/signUp">Sign Up</a>
			</p>
			<hr className="login-footer-line"/>
			<p className="login-footer-msg"> 
			By continuing in you agree to BakeAway's Terms of Service, Privacy Policy
			</p>
			
			</div>
		</div>
    )
}