/* eslint-disable no-sequences */
/* eslint-disable consistent-return */
// == Import : npm
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// == Import : local
// Component
import Header from './Header';
import Main from './Main';

// Style
import './style.scss';

// == Composant
const QuestionForm = ({ isShowing, hide, questions }) => {
  const [action, setAction] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestionButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    setAction(!action);
  };

  useEffect(() => {
    if (isShowing === false) {
      return setCurrentQuestion(0), setAction(false);
    }
  },[isShowing]);
  return (
    (isShowing
      ? ReactDOM.createPortal(
        <div className="background">
          <div className="questionForm">
            <Header
              quitButton={hide}
              questions={questions}
              currentQuestion={currentQuestion + 1}
            />
            <Main
              hide={hide}
              questions={questions}
              action={action}
              setAction={setAction}
              currentQuestion={currentQuestion + 1}
              setCurrentQuestion={setCurrentQuestion}
              handleNextQuestionButtonClick={handleNextQuestionButtonClick}
            />
          </div>
        </div>,
        document.body,
      )
      : null)
  );
};

QuestionForm.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      picture: PropTypes.string,
      difficulty: PropTypes.number.isRequired,
      id_category: PropTypes.number.isRequired,
      trivia: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default QuestionForm;
