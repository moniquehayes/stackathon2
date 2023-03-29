import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes, addToQuotes } from "../store/quotesSlice";
import Share from "./Share";
import { Modal, Button } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);
  const myPickedQuote = quotes.pickedQuote;

  //prettier-ignore
  const topicsArray = ['Age', 'Amazing', 'Art', 'Attitude', 'Beauty', 'Best', 'Business', 'Change', 'Cool', 'Courage', 'Dating', 'Dreams', 'Education', 'Equality', 'Experience', 'Failure', 'Faith', 'Family', 'Fear', 'Forgiveness', 'Freedom', 'Friendship', 'Funny', 'Happiness', 'Hope', 'Humor', 'Inspirational', 'Knowledge', 'Leadership', 'Learning', 'Life', 'Love', 'Money', 'Success'];

  const [category, setCategory] = useState("");
  const [btnMessage, setBtnMessage] = useState('Add to My Quotes');
  const [show, setShow] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(fetchQuotes(category));
  };

  const pickForMe = async () => {
    const idx = Math.floor(Math.random() * 34);
    const selectedCategory = topicsArray[idx];
    await dispatch(fetchQuotes(selectedCategory));
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <div>
        <div id="cat-input">
          <h3>Category: </h3>
          <form onSubmit={handleSubmit}>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="form"
            >
              <option value="">---Choose a category---</option>
              {topicsArray.map((topic) => {
                return <option value={topic}>{topic}</option>;
              })}
            </select>
            <button type="submit" id="submit">
              Pick me up!
            </button>
          </form>
        </div>
        <div>
          {myPickedQuote
            ? myPickedQuote.map((quote) => {
                return (
                  <div key={quote.id} id="quotebox">
                    <h1>"{quote.quote}"</h1>
                    <h3>by: {quote.author}</h3>
                    <div id="sharing">
                      <Share />
                    </div>
                    <div>
                      <button id='add-button'
                        onClick={async () => {
                          await dispatch(addToQuotes(quote));
                          setShow(true);
                        }}
                      >
                        {btnMessage}
                      </button>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                      >
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body id="contained-modal-title-vcenter" style={{textAlign: 'center'}}>Added to My Quotes!</Modal.Body>
                        <Modal.Footer>
                          <Button id='modal-button' onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        <div>
          {myPickedQuote.length === 0 ? (
            <button onClick={pickForMe} id="random-pick">
              Pick for me
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Home;