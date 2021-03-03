// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  autoComplete,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `fieldMenu-${name}`;

  return (
    <div>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="menu-modal--input"
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={name}
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
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
  autoComplete: 'off',
};

// == Export
export default Field;
