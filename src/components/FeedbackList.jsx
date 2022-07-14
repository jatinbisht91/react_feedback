import { useContext, useState } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedback, loading } = useContext(FeedbackContext);

  if (!loading && (!feedback || feedback.length === 0)) {
    return <>NO FEEDBACK YET</>;
  }

  return loading ? (
    <Spinner />
  ) : (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
