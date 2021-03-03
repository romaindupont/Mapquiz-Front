/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

const TrophyCard = ({ name, picture, min_level_to_unlock, description }) => (
  <div className="trophy-card">
    <h2 className="trophy-card-title">{name}</h2>
    <img className="trophy-card-badge" src={picture} alt="" />
    <p className="trophy-card-content">{description}</p>
    <p className="trophy-card-lvl">level {min_level_to_unlock}</p>
  </div>
);

TrophyCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  min_level_to_unlock: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
export default TrophyCard;
