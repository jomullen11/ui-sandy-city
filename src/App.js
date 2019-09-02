import React, { useState } from "react";
import NavBar from './Nav/Navbar'
import Routes from './Nav/Routes'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
    const [email, setEmail] = useState('jordantmullen11@gmail.com')
    return(
        <>
        <Router>
            <NavBar />
            <Routes />
        </Router>
        </>
    )
}

export default App;
