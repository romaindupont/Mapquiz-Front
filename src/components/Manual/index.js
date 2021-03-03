/* eslint-disable react/jsx-props-no-spreading */
// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import Instruction from './Instruction';
import manual from '../../data/manual';
// == Import : style
import './style.scss';

// == Component
const Manual = () => (
  <div className="manual">
    <h1 className="manual-title">Mappy, explique-moi ?!</h1>
    {manual.map((instruction) => (
      <Instruction
        key={instruction.id}
        {...instruction}
      />
    ))}
    <Link to="/" className="manual-btn">Accueil</Link>
  </div>
);

export default Manual;
