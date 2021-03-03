/* eslint-disable no-unused-vars */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import SadMappy from '../../assets/images/carty-triste.svg';

// == Import : style
import './style.scss';

const UnsubscribePage = ({ handleUnsubscribe }) => (
  <div className="unsubscribe">
    <h1 className="unsubscribe-title">Tu veux nous quitter ?</h1>
    <p className="unsubscribe-content">La suppression de ton compte sera déinitive et l&apos;ensemble de ta progression sera perdue.</p>
    <img className="unsubscribe-image" alt="mappy-triste" src={SadMappy} />
    <button className="unsubscribe-suppression" type="button" onClick={handleUnsubscribe}>Je confirme la suppression de mon compte</button>
  </div>
);

UnsubscribePage.propTypes = {
  handleUnsubscribe: PropTypes.func.isRequired,
};

export default UnsubscribePage;
