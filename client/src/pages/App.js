import React from "react";
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage"
import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import ResultPage from "./ResultPage";
import Cart from "./Cart";
import ConfirmationPage from "./ConfirmationPage";
import NavBar from "../components/NavBar";
import AboutUs from "./AboutUs";
import Login from "./LoginPage"

export default function App(){
  return(
    <Router>
      <Routes>
        <Route exact path= "/" element={<LandingPage/>} />
        <Route exact path= "/results" element={<ResultPage/>} />
        <Route exact path= "/cart" element={<Cart/>} />
        <Route exact path= "/confirmation" element={<ConfirmationPage/>} />
        <Route exact path= "/About" element={<AboutUs/>} />
        {/* <Route exact path= "/Login" element={<Login/>} /> */}
        
      </Routes>
    </Router>
  )
}