import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is lesbian feedback item 1',
      rating: 10.0,
    },
    {
      id: 2,
      text: 'This is lesbian feedback item 2',
      rating: 8.5,
    },
    {
      id: 3,
      text: 'This is lesbian feedback item 3',
      rating: 9.0,
    },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  const deleteFeedback = (id) => {
    // console.log('App', id);
    if (window.confirm('Are you sure you want to delete Lesbian feedbacks?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
