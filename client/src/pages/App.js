import React from "react";
import {useState} from 'react'
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage.js"
import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import ResultPage from "./ResultPage.js";
import Cart from "./Cart.js";
import ConfirmationPage from "./ConfirmationPage.js";
import NavBar from "../components/NavBar.js";
import AboutUs from "./AboutUs.js";
import Login from "./LoginPage.js"
import LogoutPage from "./LogoutPage.js"
import SignUpPage from "./SignUpPage.js"
import ItemPage from "./ItemPage.js"
import CheckoutPage from "./CheckoutPage.js"
import CreatePostPage from "./CreatePostPage.js"
import Dashboard from "./Dashboard.js"

export default function App(){

  const [cart, setCart] = useState([
    ]);

  return(
    <Router>
      <Routes>
        <Route exact path= "/" element={<LandingPage />} />
        <Route exact path= "/results" element={<ResultPage />} />
        <Route exact path= "/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        <Route exact path= "/confirmation" element={<ConfirmationPage/>} />
        <Route exact path= "/About" element={<AboutUs/>} />
        <Route exact path= "/Login" element={<Login/>} />
        <Route exact path= "/SignUp" element={<SignUpPage/>} />
        <Route exact path= "/Item" element={<ItemPage setCart={setCart} prev={cart}/>} />
        <Route exact path= "/Checkout" element={<CheckoutPage/>} />
        <Route exact path= "/CreatePost" element={<CreatePostPage/>} />
        <Route exact path= "/Logout" element={<LogoutPage/>} />
        <Route exact path= "/Dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}