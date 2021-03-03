// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import { ReactComponent as Carty } from '../../../assets/images/carty.svg';
// == Import : style
import './style.scss';

// == Component
const Instruction = ({ taskName, picture, description }) => (
  <div className="instruction">
    <svg className="instruction-carty"><Carty /></svg>
    <main className="instruction-step">
      <h3 className="instruction-title">{taskName}</h3>
      <img src={picture} alt="Ooops" className="instruction-picture" />
      <p className="instruction-description">{description}</p>
    </main>
  </div>
);

Instruction.propTypes = {
  taskName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Instruction;
