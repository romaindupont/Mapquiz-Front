/* eslint-disable no-console */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import QuestionForm from '../../containers/QuestionForm';
import Wait from '../Loader';
import { ReactComponent as MapBackground } from '../../assets/images/mapmonde2.svg';

// == Import : style
import './style.scss';

// Custom hook
import useModal from '../../customHooks/useModal';

// eslint-disable-next-line react/prop-types
const Map = ({ loading, fetchQuestion }) => {
  const { isShowing, toggleModal } = useModal();
  const handleClick = (e) => {
    fetchQuestion(e.target.id);
  };
  return (
    <>
      <div className="map">
        <div className="map-content">
          <MapBackground
            className="map-background"
            onClick={(e) => {
              toggleModal();
              handleClick(e);
            }}
          />
          {loading && (<Wait />)}
          {!loading && (
          <QuestionForm isShowing={isShowing} hide={toggleModal} />)}
        </div>
      </div>
    </>
  );
};

Map.prototype = {
  fetchQuestion: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Map;
