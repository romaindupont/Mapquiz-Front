/* eslint-disable react/prop-types */
/* eslint-disable max-len */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
// Style
import './style.scss';

// == Component
const Footer = ({
  questions,
  nextQuestion,
  currentQuestion,
  hide,
  levelUp,
}) => {
  const handleClic = () => {
    levelUp();
    hide();
  };

  return (
    <footer className="footer">
      <p className="footer-trivia">{questions[currentQuestion - 1].questions.trivia}</p>
      {currentQuestion < 10
        ? (
          <button className="button" type="button" onClick={() => nextQuestion()}>
            Question suivante !
          </button>
        )
        : (
          <button className="button" type="button" onClick={handleClic}>
            Le quiz est fini !
          </button>
        )}
    </footer>
  );
};

Footer.propTypes = {
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
  nextQuestion: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  hide: PropTypes.func.isRequired,
  levelUp: PropTypes.func.isRequired,
};

export default Footer;
