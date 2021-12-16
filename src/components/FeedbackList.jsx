import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeebackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  //   console.log(feedback);
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem 
        key={item.id} 
        item={item} 
        handleDelete={handleDelete}/>
      ))}
    </div>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeebackList;








