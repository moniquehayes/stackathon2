import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";


const Main = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/myquotes'>My Quotes</Link>
            </nav>
            <main>
                ***ADD LOGO HERE!***
                <Routes>
                    ---- add routes ---
                </Routes>
                <Home/>
            </main>
        </div>
    )
};

export default Main;