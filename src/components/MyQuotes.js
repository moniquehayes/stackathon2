import React from "react";
import { useSelector } from "react-redux";

const MyQuotes = () => {
    const quotes = useSelector((state => state.quotes));
    const myQuotes = quotes.myQuotes;
    console.log(myQuotes);

    return (
        <>
        <div id='myquotes-section'>
            <h3>My Quotes</h3>
            <ul>
                {myQuotes.length !== 0 
                ? myQuotes.map((quote) => {
                    return (
                        <li id='onequote'>
                            <h4 id='myq-q'>"{quote.quote}"</h4>
                            <h6>by: {quote.author}</h6>
                            <p id='cat-p'>Category: {quote.category}</p>
                        </li>
                    )
                })
                : 'No quotes added yet :('}
            </ul>
        </div>
        </>
    )


};

export default MyQuotes;