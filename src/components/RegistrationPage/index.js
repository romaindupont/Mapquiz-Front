/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import : npm
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// == Import : local
import rocket from '../../assets/images/rocket.svg';
import Field from './Field';
import './style.scss';
import OptionButton from './OptionButton';

const RegistrationPage = ({
  email,
  password,
  password2,
  changeField,
  nickname,
  handleRegistration,
  handleChangeUserInfo,
  fetchAvatars,
  // ! Manque avatars en proptypes //
  avatars,
  load,
}) => {
  const location = useLocation();

  const [change, handlingChange] = useState('');
  const handleChange = (e) => {
    handlingChange(e.target.value);

  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (location.pathname === '/inscription') {
      handleRegistration(change);
    }
    if (location.pathname === '/mes-preferences') {
      handleChangeUserInfo(change);
    }
  };
  const handleClick = (e) => {
    fetchAvatars();
  };

  return (
    <div className="registration">
      <h1 className="registration-title">{location.pathname === '/inscription' ? 'Inscription' : 'Mes préférences' }</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        {location.pathname === '/inscription'
          ? (
            <>
              <label className="registration-email" htmlFor="registration-email">Email</label>
              <Field
                type="email"
                value={email}
                onChange={changeField}
                name="email"
                placeholder="Entre ton adresse email"
                autoComplete="email"
              />
            </>
          ) : null }

        <label className="registration-password" htmlFor="registration-password">{location.pathname === '/inscription' ? 'Mot de passe' : 'Modifier mon mot de passe' }</label>
        <Field
          type="password"
          name="password"
          value={password}
          onChange={changeField}
          placeholder="Entre ton mot de passe"
          minlength="8"
        />

        <label className="registration-password" htmlFor="registration-password2">{location.pathname === '/inscription' ? 'Confirmation du mot de passe' : 'Confirmation du nouveau mot de passe' }</label>
        <Field
          type="password"
          name="password2"
          placeholder="Entre à nouveau ton mot de passe"
          value={password2}
          onChange={changeField}
          minlength="8"
        />

        <label className="registration-pseudo" htmlFor="registration-pseudo">Pseudo</label>
        <Field
          type="text"
          name="nickname"
          placeholder="Entre ton pseudo"
          value={nickname}
          onChange={changeField}
        />

        <label className="registration-password" htmlFor="registration-select">Avatar</label>
        <select id="registration-select" onClick={handleClick} onChange={handleChange}>
          <option>- Choisi ton avatar -</option>
          {load && (<option className="app-load">Veuillez patienter</option>)}
          {!load && (avatars.avatarsList.map((avatar, index) => <OptionButton key={index} {...avatar} />))}
        </select>
        <div className={`registration-option1-${change}`} />
        {location.pathname === '/inscription'
          ? (
            <div>
              <input type="checkbox" id="registration-check" name="cgu" defaultChecked />
              <label className="registration-check" htmlFor="registration-check">J&apos;accepte les <Link className="registration-link--black" to="/cgu"><span className="registration-span">conditions d&apos;utilisation</span></Link> de MapQuiz</label>
            </div>
          ) : null }
        <button className="registration-button" type="submit">
          {location.pathname === '/inscription' ? 'Je m\'inscris !' : 'Enregistrer' }
          <img src={rocket} alt="fusée" className="homepage-img" />
        </button>
      </form>
      {location.pathname === '/inscription' ? null : (<button className="registration-suppression" type="button"><Link className="registration-link" to="/desinscription">Supprimer mon compte</Link></button>) }
    </div>
  );
};

RegistrationPage.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
  avatar_id: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  nickname: PropTypes.string.isRequired,
  handleRegistration: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  fetchAvatars: PropTypes.func.isRequired,
  load: PropTypes.bool.isRequired,
  handleChangeUserInfo: PropTypes.string.isRequired,
};

export default RegistrationPage;
