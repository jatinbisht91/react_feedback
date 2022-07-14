import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [Loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    edit: false,
    item: {},
  });

  useEffect(() => {
    getFeedback();
  }, [feedback]);

  const getFeedback = async () => {
    const response = await fetch(
      `https://app4563.herokuapp.com/feedback?_sort=id&order=_desc`
    );
    const data = await response.json();
    setFeedback(data);
    setLoading(false);
  };

  const deleteFeedback = async (id) => {
    await fetch(`https://app4563.herokuapp.com/feedback/${id}`, {
      method: "DELETE",
    });
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const addFeedback = async (newFeed) => {
    const response = await fetch(`https://app4563.herokuapp.com/feedback`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newFeed),
    });

    const data = response.json();
    setFeedback([...feedback, data]);
  };

  const updateFeedback = async (id, updateItem) => {
    const response = await fetch(`https://app4563.herokuapp.com/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    });

    const data = await response.json();
    setFeedback(feedback.map((item) => (item.id == id ? data : item)));
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        Loading,
        feedback,
        feedbackEdit,
        deleteFeedback,
        editFeedback,
        addFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
