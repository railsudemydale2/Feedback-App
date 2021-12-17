import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value)
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your lesbian service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a Review"
            value={text}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
