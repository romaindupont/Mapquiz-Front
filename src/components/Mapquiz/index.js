// == Import : npm
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import HomePage from '../HomePage';
import Planetes from '../../containers/Planetes';
import Map from '../../containers/Map';
import Navbar from '../Navbar';
import Error from '../Error';
import Trophy from '../../containers/Trophy';
import Team from '../Team';
import UnsubscribePage from '../../containers/UnsubscribePage';
import Manual from '../Manual';
import CGU from '../CGU';

import RegistrationPage from '../../containers/RegistrationPage';

// == Import : style
import './style.scss';

const Mapquiz = ({ theme, redirection, isLogged }) => (
  <div className="mapquiz">
    <Navbar />
    <Switch>
      <Route exact path="/">
        <HomePage redirection={redirection} />
      </Route>
      <Route exact path="/team">
        <Team />
      </Route>
      <Route exact path="/manual">
        <Manual />
      </Route>
      <Route exact path="/cgu">
        <CGU />
      </Route>
      <Route exact path="/redirection">
        <HomePage redirection={redirection} />
      </Route>
      <Route exact path="/questions">
        <div>
          {theme ? (<Map />) : (<Planetes />)}
        </div>
      </Route>
      {isLogged && (
        <>
          <Route exact path="/trophees">
            <Trophy />
          </Route>
          <Route exact path="/mes-preferences">
            <RegistrationPage />
          </Route>
          <Route exact path="/desinscription">
            <UnsubscribePage />
          </Route>
        </>
      )}
      <Route exact path="/inscription">
        <RegistrationPage />
        {redirection && <Redirect to="/redirection" />}
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  </div>
);

Mapquiz.propTypes = {
  theme: PropTypes.bool.isRequired,
  redirection: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Mapquiz;
