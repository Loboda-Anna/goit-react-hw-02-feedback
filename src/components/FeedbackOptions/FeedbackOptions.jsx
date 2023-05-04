import PropTypes from 'prop-types';
import './FeedbackOptions.css';

export const FeedbackOptions = ({ options ,  onLeaveFeedback }) => {
  const btnsNames = Object.values(options);
  return (
    <div>
      {btnsNames.map(label => (
        <button
          key={label}
          id={label}
          onClick={onLeaveFeedback}
          className="btns"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
