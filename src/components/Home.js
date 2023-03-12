import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes, addToMyQuotes } from "../store/quotesSlice";
import Share from "./Share";

const Home = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);
  const myPickedQuote = quotes.pickedQuote;

  //prettier-ignore
  const topicsArray = ['Age', 'Amazing', 'Art', 'Attitude', 'Beauty', 'Best', 'Business', 'Change', 'Cool', 'Courage', 'Dating', 'Dreams', 'Education', 'Equality', 'Experience', 'Failure', 'Faith', 'Family', 'Fear', 'Forgiveness', 'Freedom', 'Friendship', 'Funny', 'Happiness', 'Hope', 'Humor', 'Inspirational', 'Knowledge', 'Leadership', 'Learning', 'Life', 'Love', 'Money', 'Success'];

  const [category, setCategory] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(fetchQuotes(category));
  };

  const pickForMe = async () => {
    const idx = Math.floor(Math.random()*34);
    const selectedCategory = topicsArray[idx];
    await dispatch(fetchQuotes(selectedCategory));
  }

  return (
    <>
      <div>
        {/* <h1>pick me up</h1> */}
        <div id="cat-input">
          <h3>Category: </h3>
          <form onSubmit={handleSubmit}>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
                <option value=''>---Choose a category---</option>
                {topicsArray.map((topic) =>  {
                    return (
                        <option value={topic}>{topic}</option>
                    )
                })}
            </select>
            <button type="submit">Pick me up!</button>
          </form>
        </div>
        <div id='quotebox'>
          {myPickedQuote
            ? myPickedQuote.map((quote) => {
                return (
                  <div key={quote.id}>
                    <h1>"{quote.quote}"</h1>
                    <h3>by: {quote.author}</h3>
                    {/* <Link>Add to My Quotes</Link> */}
                    <div id='sharing'>
                        <h5>Share</h5>
                        <Share/>
                </div>
            {/** https://www.npmjs.com/package/react-share  */}
                  </div>
                ) 
              })
            : null}
        </div>
        <div>
            {myPickedQuote.length === 0 ? 
            <button onClick={pickForMe}>Pick for me</button>
            : null}
        </div>
      </div>
    </>
  );
};

export default Home;
