import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes } from "../store/quotesSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);

  const [category, setCategory] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(fetchQuotes(category));
  };

  return (
    <>
      <div>
        <h1>pick me up</h1>
        <div id="cat-input">
          <h3>Category: </h3>
          <form onSubmit={handleSubmit}>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
                <option value=''>---Choose a category---</option>
              <option value="age">Age</option>
              <option value="amazing">Amazing</option>
              <option value="art">Art</option>
              <option value="attitude">Attitude</option>
              <option value="beauty">Beauty</option>
              <option value="best">Best</option>
              <option value="business">Business</option>
              <option value="change">Change</option>
              <option value="cool">Cool</option>
              <option value="courage">Courage</option>
              <option value="dating">Dating</option>
              <option value="dreams">Dreams</option>
              <option value="education">Education</option>
              <option value="equality">Equality</option>
              <option value="experience">Experience</option>
              <option value="failure">Failure</option>
              <option value="faith">Faith</option>
              <option value="family">Family</option>
              <option value="fear">Fear</option>
              <option value="forgiveness">Forgiveness</option>
              <option value="freedom">Freedom</option>
              <option value="friendship">Friendship</option>
              <option value="funny">Funny</option>
              <option value="happiness">Happiness</option>
              <option value="hope">Hope</option>
              <option value="humor">Humor</option>
              <option value="inspirational">Inspirational</option>
              <option value="knowledge">Knowledge</option>
              <option value="leadership">Leadership</option>
              <option value="learning">Learning</option>
              <option value="life">Life</option>
              <option value="love">Love</option>
              <option value="money">Money</option>
              <option value="success">Success</option>
            </select>
            {/* <input 
                        name='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    ></input> */}
            <button type="submit">Pick me UP!</button>
          </form>
        </div>
        <div id='quotebox'>
          {quotes
            ? quotes.map((quote) => {
                return (
                  <div key={quote.id}>
                    <h1>"{quote.quote}"</h1>
                    <h3>by: {quote.author}</h3>
                    <Link>Add to My Quotes</Link>
            <Link>Share</Link>
            {/** https://www.npmjs.com/package/react-share  */}
                  </div>
                )
                
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Home;
