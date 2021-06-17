import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbarr from "./Navbar"
import Registration from "./Registration"
import HomePage from "./Home"
import Login from "./Login"
import Profile from "./Profile"

function App(){
    return (
    <Router>
        <Navbarr />
        <Route path = "/" exact component = {HomePage}/>
        <Route path="/home" exact component={Registration}/>
        <Route path = "/login" exact component = {Login} />
        <Route path = "/profile" exact component = {Profile} />
    </Router>
    
    
    );
}

export default App;
