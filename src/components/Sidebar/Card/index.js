// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : style
import './style.scss';

const Card = ({ img, title, infos }) => (

  <div className="card-container">
    <img src={img} alt="" />
    <h2 className="card-title">{title}</h2>
    <p className="card-infos">{infos}</p>
  </div>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  infos: PropTypes.string.isRequired,
};

export default Card;
