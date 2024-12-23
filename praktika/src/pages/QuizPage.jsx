import React from 'react';
import Question from '../components/Question';
import Navigation from '../components/Navigation';
import Result from '../components/Result';
import { useSelector } from 'react-redux';
import './QuizPage.css'

const QuizPage = () => {
  const { currentQuestionIndex, questions, answers } = useSelector((state) => state.quiz);

  const isQuizCompleted = answers.length === questions.length && answers.every(Boolean);

  return (
    <div className='content'>
        {!isQuizCompleted ? (
          <>
            <Question />
            <Navigation />
          </>
        ) : (
          <Result />
        )}
    </div>
  );
};

export default QuizPage;
