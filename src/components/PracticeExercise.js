import React, { useState } from "react";

const PracticeExercise = ({ prompt, handleAnswer }) => {
  const [answer, setAnswer] = useState("");

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAnswer(answer);
  };

  return (
    <div>
      <h3>{prompt}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={answer} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PracticeExercise;
