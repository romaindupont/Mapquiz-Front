/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';
import Field from './Field';

const Menu = ({
  isConnected,
  open,
  changeOpen,
  handleLogin,
  email,
  password,
  changeField,
  handleLogout,
  nickname,
  avatar_id,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="app">
      
      <div className={classNames('menu-modal', { 'menu-modal--open': open })}>
        <nav className={classNames('menu-modal--nav', { 'menu-modal--nav--open': open })}>
          {isConnected ? (
            <>
              <p className="menu-modal--welcome">
                Bonjour <span className="menu-modal--nickname">{nickname}</span>
              </p>
              <div className={`menu-modal--${avatar_id}`} />
              <li className="menu-modal--li"><Link className="menu-modal--link" to="/mes-preferences">Mes préférences</Link></li>
              <li className="menu-modal--li"><Link className="menu-modal--link" to="/trophees">Mes trophées</Link></li>
              <li className="menu-modal--li"><Link className="menu-modal--help-connect" to="/manual">Besoin d'aide</Link></li>
            </>
          ) : (
            <form className="menu-modal--form" onSubmit={handleSubmit}>
              <label className="menu-modal--label" htmlFor="email">Email</label>
              <Field
                type="email"
                placeholder="Entre ton adresse email"
                autoComplete="email"
                value={email}
                onChange={changeField}
                name="email"
              />
              <label className="menu-modal--label" htmlFor="password">Mot de passe</label>
              <Field
                type="password"
                placeholder="Entre ton mot de passe"
                autoComplete="current-password"
                value={password}
                onChange={changeField}
                name="password"
              />
              <button className="menu-modal--buton" type="submit">Connexion</button>
              <Link className="menu-modal--account" to="/inscription">Pas encore de compte ?</Link>
              <Link className="menu-modal--account" to="/cgu">CGU</Link>
              <Link className="menu-modal--help" to="/manual">Besoin d'aide</Link>
            </form>
          )}
          <li className="menu-modal--li"><Link className="menu-modal--link" to="/team">Nous connaître</Link></li>
          {isConnected
            ? (
              <>
                <button className="menu-modal--deconnexion" type="button" onClick={handleLogout}>Me déconnecter</button>
              </>
            ) : null }
        </nav>
      </div>
      <div className="menu" role="menu" tabIndex={0} onClick={changeOpen} aria-hidden="true">
        <div className={classNames('menu-burger', { 'menu-burger--open': open })}>
          <div className={classNames('menu-burger-bar1', { 'menu-burger--open-bar1': open })} />
          <div className={classNames('menu-burger-bar2', { 'menu-burger--open-bar2': open })} />
          <div className={classNames('menu-burger-bar3', { 'menu-burger--open-bar3': open })} />
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  changeOpen: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  nickname: PropTypes.string.isRequired,
  avatar_id: PropTypes.number.isRequired,
};

export default Menu;
