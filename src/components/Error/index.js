// Import : npm
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// == Import : local
import './style.scss';

const Error = () => {
  const location = useLocation();
  return (
    <div className="error">
      <h1 className="error-title">404</h1>
      <Link to="/" className="error-btn">Accueil</Link>
      <p className="error-content">{location.pathname === '/mes-preferences' || location.pathname === '/trophees' ? 'Tu dois être connecté pour accéder à cette page.' : 'Tu t\'es égaré ?' }</p>
    </div>
  );
};

export default Error;
