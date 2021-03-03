/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

const OptionButton = ({ id, name, picture }) => (
  <>
    <option className="registration-option" value={id}>{name}</option>
  </>
);

OptionButton.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default OptionButton;
