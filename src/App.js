import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lesson from "./components/Lesson";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/lessons/:language" element={<Lesson />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
