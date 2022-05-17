import React from "react"
import {useState} from "react"
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../components/NavBar.js";
import "../Styles/LoginPage.css";

export default function SignUp(){
	let navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        firstName: "", 
        lastName: "",
        username : "",
		password : "",
		type: ""
    });
	const postData = async () => {
        try {
            const data = { ...loginData }
            let res = await fetch("http://localhost:8080/api/allUsers", {
                method: "POST",

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
					userID: Date.now(),
					username: loginData.username,
					password: loginData.password,
					type: loginData.type,
					firstname: loginData.firstName,
					lastname: loginData.lastName
                }),
            });

            let resJson = await res.json();
            console.log(resJson)
			
			if(resJson.message == 'success'){
				alert(`Welcome, ${loginData.firstName} your account was successfully created.`)
				console.log(`Welcome, ${loginData.firstName} your account was successfully created.`)
				navigate('/Login')
            } else {
				console.log(resJson.error)
				alert("Unable to create account. Please try again.")
			}
			
        } catch (err) {
            console.log(err.message)
		}
		
    }
    
    console.log(loginData);
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
		postData()
    }
    return(
<div>
			<Navbar/>
			<div className="login-box sign-up-box">
				
				{/* <img src={logo} className="logo"/> */}

				<h1 className="login-msg">Create an account</h1>
			<form onSubmit={handleSubmit} className="login-form">
            <label className="user-first-name">
					<input className="login-input"
					placeholder="First Name"
                    type="text" 
                    name="firstName"
					value={loginData.firstName}
					onChange={handleChange}
					/>
				</label>
                <label className="user-last-name">
					<input className="login-input"
					placeholder="Last Name"
                    type="text" 
                    name="lastName"
					value={loginData.lastName}
					onChange={handleChange}
					/>
				</label>
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
				{/* <p>Please select ONE: </p> */}
				<div className="login-input-radio">
				<label className="login-input-radio-buyer">
					Buyer
					<input 
                    type="radio" 
                    name="type"
					value="buyer"
					onChange={handleChange}
					/>
				</label>
				<label className="login-input-radio-seller">
					Seller
					<input
                    type="radio" 
                    name="type"
					value="seller"
					onChange={handleChange}
					/>
				</label>
				</div>
				<input type="submit" value="Sign Up" className="login-btns login-submit-btn"/>
				{/* <p className="login-OR"> or</p>

				<button className="login-btns login-google-btn">
					<img src={google_logo} className="google-logo"/> 
					<p className="google-text">Continue with Google</p>
				</button> */}
			</form>
			<p className="sign-up-msg"> 
				Already a member? <Link to="/login">Login</Link>
			</p>
			<hr className="login-footer-line"/>
			<p className="login-footer-msg"> 
				By continuing in you agree to BakeAway's Terms of Service, Privacy Policy
			</p>


			</div>
		</div>
    )
}
