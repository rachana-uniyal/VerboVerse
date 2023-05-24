import React from "react";
import { useParams } from "react-router-dom";

const Lesson = ({ title, content }) => {
  const { language } = useParams();

  return (
    <div className="lesson-container">
      <h1>{language} Lessons</h1>
      <h2 className="lesson-title">{title}</h2>
      <p className="lesson-content">{content}</p>
    </div>
  );
};

export default Lesson;
