import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbarr from "./Navbar"
import Registration from "./Registration"

function App(){
    return (
    <Router>
        <Navbarr />
        <Route path="/home" exact component={Registration}/>
    </Router>
    
    
    );
}

export default App;