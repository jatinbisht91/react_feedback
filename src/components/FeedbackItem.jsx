import React, { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div>{item.rating}</div>
      <button
        onClick={() => {
          deleteFeedback(item.id);
        }}
      >
        <FaTimes color="purple" />
      </button>
      <button
        onClick={() => {
          editFeedback(item);
        }}
      >
        <FaEdit color="purple" />
      </button>
      <div>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
