import React from "react";
import { useState, useEffect, useContext } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import Rating from "./Rating";
import FeedbackContext from "../Context/FeedbackContext";
function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const { addFeedback, updateFeedback, feedbackEdit } = useContext(FeedbackContext)

  useEffect(() => {
    setText(feedbackEdit.item.text);
    setBtnDisabled(false);
    setRating(feedbackEdit.item.rating);
  }, [feedbackEdit])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      console.log(text)
      const newFeedback = {
        text,
        rating
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      console.log(newFeedback)
      setBtnDisabled(true);
      setText("");
    }
  };

  const handleTextChange = ({ target: { value } }) => {
    // setText(value);
    console.log(text)
    if (value === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be of length 10 character");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(value);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you rate your service with us </h2>
        <Rating select={setRating} selected={rating} />

        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
