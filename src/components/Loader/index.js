import React from 'react';
import Earth from '../../assets/images/earth.png';
import './style.scss';

const Loader = () => (
  <div className="loader">
    <img className="loader-image" src={Earth} alt="Terre" />
  </div>
);

export default Loader;
