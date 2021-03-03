/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
/* eslint-disable camelcase */
/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import exit from '../../../assets/images/exit.png';

// == Import : local
import './style.scss';

// == Composant
const Header = ({
  difficulty,
  quitButton,
  currentQuestion,
  questions,
}) => {
  let category = '';
  if (questions[currentQuestion - 1].questions.id_category === 1) {
    category = ' Europe';
  }
  if (questions[currentQuestion - 1].questions.id_category === 2) {
    category = ' Asie';
  }
  if (questions[currentQuestion - 1].questions.id_category === 3) {
    category = ' Amérique du Nord';
  }
  if (questions[currentQuestion - 1].questions.id_category === 4) {
    category = ' Amérique du Sud';
  }
  if (questions[currentQuestion - 1].questions.id_category === 5) {
    category = ' Afrique';
  }
  if (questions[currentQuestion - 1].questions.id_category === 6) {
    category = ' Océanie';
  }
  if (questions[currentQuestion - 1].questions.id_category === 7) {
    category = ' Planètes';
  }
  if (questions[currentQuestion - 1].questions.id_category === 8) {
    category = ' Antarctique';
  }
  // ! Missing in propTypes: questions.id_category
  return (
    <>
      <header
        className="header"
        difficulty={difficulty}
      >
        <button className="header-quitQuizButton" type="button" onClick={quitButton}><img className="header-exit" src={exit} alt="quitter" /></button>
          <h2
            className="header-category"
            idcategory={questions[currentQuestion - 1].questions.id_category}
          >
            Catégorie : 
            {category}
          </h2>
          <p className="header-counter">
            <strong className="header-strong">
              {currentQuestion}
              /10
            </strong>
          </p>
      </header>
      <div className="header-questionDisplay">
          <h3 className="header-question">{questions[currentQuestion - 1].questions.question}</h3>
      </div>
    </>
  );
};

Header.propTypes = {
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
  question: PropTypes.string,
  difficulty: PropTypes.number,
  quitButton: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired,
};

Header.defaultProps = {
  question: '',
  difficulty: 0,
};

export default Header;
