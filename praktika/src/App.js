import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizPage from './pages/QuizPage';

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/quiz" element={<QuizPage />} />
    //   </Routes>
    // </Router>
    <QuizPage/>
  );
};

export default App;
