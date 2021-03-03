// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

const Avatar = ({ avatarLink, name, description }) => (
  <div className="avatar">
    <img className="avatar-img" src={avatarLink} alt="#" />
    <div className="avatar-infos">
      <h3 className="avatar-name">{name}</h3>
      <p className="avatar-description">{description}</p>
    </div>
  </div>
);

Avatar.propTypes = {
  avatarLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Avatar;
