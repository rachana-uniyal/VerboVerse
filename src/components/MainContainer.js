import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainContainer = () => {
  const navigate = useNavigate();
  //   const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageSelection = (language) => {
    // setSelectedLanguage(language);
    navigate(`/lessons/${language}`); // Navigate to the lessons page for the selected language
  };

  return (
    <div className="main-container">
      <h1>Welcome to VerboVerse!</h1>
      <h2>Please select a language </h2>
      <ul className="language-list">
        <li>
          <button onClick={() => handleLanguageSelection("English")}>
            English
          </button>
        </li>
        <li>
          <button onClick={() => handleLanguageSelection("Spanish")}>
            Hindi
          </button>
        </li>
        <li>
          <button onClick={() => handleLanguageSelection("Spanish")}>
            Japanese
          </button>
        </li>
        <li>
          <button onClick={() => handleLanguageSelection("French")}>
            French
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MainContainer;
