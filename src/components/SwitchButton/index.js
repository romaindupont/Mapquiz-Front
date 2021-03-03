/* eslint-disable jsx-a11y/label-has-associated-control */
// == Impot : npm
import React from 'react';
import PropTypes from 'prop-types';

// Import : local
import './style.scss';
import moon from '../../assets/images/moon.png';
import earth from '../../assets/images/earth.png';

const SwitchButton = ({ changeTheme }) => {
  const handleTheme = () => {
    changeTheme();
  };
  return (
    <div className="checkboxWrapper">
      <input type="checkbox" defaultChecked id="myCheckbox" />
      <label htmlFor="myCheckbox" onClick={handleTheme} aria-hidden="true">
        <img src={moon} className="checkmark" alt="" />
        <img src={earth} className="cross" alt="" />
      </label>
    </div>
  );
};

SwitchButton.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

export default SwitchButton;
