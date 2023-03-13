import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import MyQuotes from "./MyQuotes";

const Main = () => {
    return (
        <div>
            <nav>
                <img src='logo.png'/>
                <div id='links'>
                <Link id='home' to='/'>Home</Link>
                <Link id='myquotes' to='/myquotes'>My Quotes</Link>
                </div>
            </nav>
            <main>
                <Routes>
                    <Route path='/myquotes' element={<MyQuotes/>}></Route>
                    <Route path='/' element={<Home/>}></Route>
                </Routes>
            </main>
        </div>
    )
};

export default Main;