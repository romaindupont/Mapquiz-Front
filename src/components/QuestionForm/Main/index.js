// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../../containers/QuestionForm/Footer';

// == Import : local
// Style
import './style.scss';

// Components
import Answers from './Answers';

// == Composant
const Main = ({
  questions,
  action,
  setAction,
  hide,
  handleNextQuestionButtonClick,
  currentQuestion,
  setCurrentQuestion,
}) => (
  <>
    <main className="main">
      <Answers
        answers={questions}
        action={action}
        setAction={setAction}
        currentQuestion={currentQuestion}
      />
    </main>
    {action && (
    <Footer
      hide={hide}
      nextQuestion={handleNextQuestionButtonClick}
      currentQuestion={currentQuestion}
      questions={questions}
      setCurrentQuestion={setCurrentQuestion}
    />
    )}
  </>
);

Main.propTypes = {
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
  action: PropTypes.bool.isRequired,
  setAction: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  handleNextQuestionButtonClick: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  setCurrentQuestion: PropTypes.func.isRequired,
};

export default Main;
