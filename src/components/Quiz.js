import React, { useState } from "react";

const Quiz = ({ question, options, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAnswer(selectedOption);
  };

  return (
    <div>
      <h3>{question}</h3>
      <form onSubmit={handleSubmit}>
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Quiz;
