import React, { useState } from "react";

const PracticeExercise = ({ prompt, handleAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAnswer(userAnswer);
    setUserAnswer("");
  };

  return (
    <div className="practice-exercise-container">
      <h3 className="practice-exercise-prompt">{prompt}</h3>
      <form onSubmit={handleSubmit} className="practice-exercise-form">
        <input
          type="text"
          value={userAnswer}
          onChange={handleChange}
          className="practice-exercise-input"
        />
        <button type="submit" className="practice-exercise-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PracticeExercise;
