import React, { useState } from "react";
import Lesson from "./Lesson";
import Quiz from "./Quiz";
import PracticeExercise from "./PracticeExercise";

const MainContainer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
  };

  const handleQuizAnswer = (answer) => {
    // Handle the selected quiz answer
    console.log("Selected quiz answer:", answer);
  };

  const handleExerciseAnswer = (answer) => {
    // Handle the submitted exercise answer
    console.log("Submitted exercise answer:", answer);
  };

  return (
    <div>
      <h1>Welcome to Your Language Learning App!</h1>
      <h2>Select a Language to Learn:</h2>
      <ul>
        <li>
          <button onClick={() => handleLanguageSelection("English")}>
            English
          </button>
        </li>
        <li>
          <button onClick={() => handleLanguageSelection("Spanish")}>
            Spanish
          </button>
        </li>
        <li>
          <button onClick={() => handleLanguageSelection("French")}>
            French
          </button>
        </li>
      </ul>

      {selectedLanguage && (
        <div>
          <h2>Lessons</h2>
          <Lesson
            title={`Lesson 1 - Introduction to ${selectedLanguage}`}
            content={`This is the content of Lesson 1 for ${selectedLanguage}.`}
          />
          <Lesson
            title={`Lesson 2 - Basic Vocabulary in ${selectedLanguage}`}
            content={`This is the content of Lesson 2 for ${selectedLanguage}.`}
          />

          <h2>Quizzes</h2>
          <Quiz
            question={`What is the word for 'Hello' in ${selectedLanguage}?`}
            options={["Hola", "Bonjour", "Hello"]}
            handleAnswer={handleQuizAnswer}
          />
          <Quiz
            question={`Translate the word 'book' to ${selectedLanguage}.`}
            options={["Libro", "Livre", "Book"]}
            handleAnswer={handleQuizAnswer}
          />

          <h2>Practice Exercises</h2>
          <PracticeExercise
            prompt={`Translate the sentence 'How are you?' to ${selectedLanguage}.`}
            handleAnswer={handleExerciseAnswer}
          />
          <PracticeExercise
            prompt={`Form a sentence using the given words in ${selectedLanguage}.`}
            handleAnswer={handleExerciseAnswer}
          />
        </div>
      )}
    </div>
  );
};

export default MainContainer;
