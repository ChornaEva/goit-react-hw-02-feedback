import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul>
        {Object.keys(options).map((option) => {
          return (
            <li key={option}>
              <button type="button" onClick={onLeaveFeedback}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeedbackOptions;
