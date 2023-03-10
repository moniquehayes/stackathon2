import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes } from "../store/quotesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);
  console.log("quotes", quotes);
  //generate random index from 1-10 to fetch the quote

  const [category, setCategory] = useState("");

  ///SET CATEGORY STATE => THEN PASS IN TO USEEFFECT

  // useEffect(() => {
  //     dispatch(fetchQuotes(category));
  // }, [dispatch]);

  const handleSubmit = async (evt) => {
    console.log(category, "cat");
    evt.preventDefault();
    await dispatch(fetchQuotes(category));
    console.log(quotes);
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
        <div>
          {quotes
            ? quotes.map((quote) => {
                return (
                  <div>
                    <h1>{quote.quote}</h1>
                    <h3>by: {quote.author}</h3>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Home;
