/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import : local
import TrophyCard from './TrophyCard';
import './style.scss';

const Trophy = ({
  fetchTrophies,
  waitTrophies,
  // ! Manque trophies in proptype validation //
  trophies,
}) => {
  useEffect(() => {
    fetchTrophies();
  }, []);

  return (
    <div className="trophy">
      <h1 className="trophy-title">Mes trophées</h1>
      <div className="trophy-container">
        {waitTrophies && (<div className="app-load">Veuillez patienter</div>)}
        {!waitTrophies && (trophies.myTrophies.map((trophy, index) => <TrophyCard key={index} {...trophy} />))}
      </div>
    </div>
  );
};

Trophy.propTypes = {
  fetchTrophies: PropTypes.func.isRequired,
  waitTrophies: PropTypes.bool.isRequired,
};

export default Trophy;
