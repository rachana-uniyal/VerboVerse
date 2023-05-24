import React, { useState } from "react";

const Quiz = ({ question, options, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAnswer(selectedOption);
    setSelectedOption("");
  };

  return (
    <div className="quiz-container">
      <h3 className="quiz-question">{question}</h3>
      <form onSubmit={handleSubmit} className="quiz-form">
        {options.map((option, index) => (
          <div key={index} className="quiz-option">
            <input
              type="radio"
              id={`option-${index}`}
              name="quiz-option"
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
        <button type="submit" className="quiz-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Quiz;
