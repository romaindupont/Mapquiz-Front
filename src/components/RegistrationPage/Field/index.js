// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : style
import './style.scss';

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  autoComplete,
  minLength,
}) => {
  const handleChange = (e) => {
    onChange(e.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="registration-input"
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={name}
        minLength={minLength}
        required
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  minLength: PropTypes.string,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
  autoComplete: 'off',
  minLength: '',
};

// == Export
export default Field;
