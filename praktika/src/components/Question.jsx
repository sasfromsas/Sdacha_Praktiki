import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer } from '../features/quiz/quizSlice';
import { motion, AnimatePresence } from 'framer-motion';
import './Question.css';

const transitionVariants = {
  initialNext: { x: '5%', opacity: 0 },
  initialPrev: { x: '-5%', opacity: 0 },
  animate: { x: '0%', opacity: 1 },
  exitNext: { x: '-5%', opacity: 0 },
  exitPrev: { x: '5%', opacity: 0 },
};

const Question = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, questions, answers } = useSelector((state) => state.quiz);
  const question = questions[currentQuestionIndex];
  const [localAnswer, setLocalAnswer] = useState(null);

  const handleAnswerSelect = (answer) => {
    setLocalAnswer(answer); // Сохраняем локально выбранный ответ
    setTimeout(() => {
      dispatch(selectAnswer({ questionIndex: currentQuestionIndex, answer })); // Обновляем Redux после задержки
    }, 200); // Задержка синхронизирована с анимацией ухода
  };

  return (
    <div className="quiz-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          variants={transitionVariants}
          initial={currentQuestionIndex > answers.length ? 'initialNext' : 'initialPrev'}
          animate="animate"
          exit={currentQuestionIndex > answers.length ? 'exitNext' : 'exitPrev'}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <h2 className='QuestionName'>{question.question}</h2>
          <ul>
            <div className="QuestionsBox">
            {question.options.map((option, index) => (
              // <li key={index}>
                <label className='OneQuestion'>
                  <input
                    className='inputRadio'
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={option.text}
                    checked={
                      (answers[currentQuestionIndex]?.text === option.text) ||
                      (localAnswer?.text === option.text) 
                      
                    }
                    onChange={() => handleAnswerSelect(option)}
                  />
                  {option.text}
                </label>
              // </li>
            ))}
            </div>
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Question;
