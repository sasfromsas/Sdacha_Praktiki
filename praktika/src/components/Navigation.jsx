import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextQuestion, previousQuestion } from '../features/quiz/quizSlice';
import './Navigation.css'

const Navigation = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, questions, answers } = useSelector((state) => state.quiz);

  return (
    <div className='bottomPanel'>
      <div className="QuestionsCounter">
        Шаг {currentQuestionIndex + 1} из 6
      </div>
      <div className="buttons">
        <button onClick={() => dispatch(previousQuestion())} disabled={currentQuestionIndex === 0}>
        🡰
        </button>
        <button
          onClick={() => dispatch(nextQuestion())}
          disabled={currentQuestionIndex == answers.length}
        >
          Далее 🡲
        </button>
      </div>  
    </div>
  );
};

export default Navigation;
