/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : style
import './style.scss';

// == Composant
const Answers = ({
  answers,
  action,
  setAction,
  currentQuestion,
}) => {
  // active et setActive is for classNames => onClick red or green if T or F.
  const handleClick = () => {
    const newClass = action;
    setAction(!newClass);
  };
  return (
    <div className="questionField">
      {/* <h3 className="answers-subtitle">Choisis la bonne réponse:</h3> */}
      <ul className="answers-answer">
        {answers[currentQuestion - 1].questions.answers.map((answer) => (
          <li
            key={answer.id}
            className={action && answer.is_correct ? 'answer-li answer-li--goodAnswer' : action && !answer.is_correct ? 'answer-li answer-li--badAnswer' : 'answer-li'}
            onClick={handleClick}
            aria-hidden="true"
          >
            {answer.label}
          </li>
        ))}
      </ul>
    </div>

  );
};

Answers.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      is_correct: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      id_question: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  action: PropTypes.bool.isRequired,
  setAction: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired,
};

export default Answers;
