import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lesson from "./components/Lesson";
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/lessons/:language" element={<Lesson />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
