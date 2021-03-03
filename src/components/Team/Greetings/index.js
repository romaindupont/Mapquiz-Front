// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './style.scss';

const Greetings = () => (
  <>
    <div className="greetings">
      <h2 className="greetings-subtitle">Remerciement</h2>
      <p className="greetings-p">Nous tenons à remercier toute l'équipe o'Clock.</p>
      <Link to="/" className="greetings-btn">Accueil</Link>
    </div>
  </>
);

export default Greetings;
