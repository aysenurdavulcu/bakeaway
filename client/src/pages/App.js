import React from "react";
import {useState} from 'react'
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage"
import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import ResultPage from "./ResultPage";
import Cart from "./Cart";
import ConfirmationPage from "./ConfirmationPage";
import NavBar from "../components/NavBar";
import AboutUs from "./AboutUs";
import Login from "./LoginPage"
import LogoutPage from "./LogoutPage"
import SignUpPage from "./SignUpPage"
import ItemPage from "./ItemPage"
import CheckoutPage from "./CheckoutPage"
import CreatePostPage from "./CreatePostPage"
import Dashboard from "./Dashboard"

export default function App(){

  const [cart, setCart] = useState([
    {
      "Description": "description",
      "GoodsID": 23,
      "Name": "Cinnamon Buns",
      "Price": "2.25",
      "Seller": "Amy R",
      "SellerID": 103,
      "Zipcode": 11223,
      "Quantity": 1
    },
    {
      "Description": "The classic combination of chocolate and peanut butter, REESE'S Peanut Butter Cups are the perfect companion for movies, sports and parties",
      "GoodsID": 24,
      "Name": "Reeses Cups",
      "Price": "1.75",
      "Seller": "Sarah P",
      "SellerID": 103,
      "Zipcode": 11223,
      "Quantity": 1
    }
    ]);

  return(
    <Router>
      <Routes>
        <Route exact path= "/" element={<LandingPage />} />
        <Route exact path= "/results" element={<ResultPage />} />
        <Route exact path= "/cart" element={<Cart cart={cart}/>} />
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