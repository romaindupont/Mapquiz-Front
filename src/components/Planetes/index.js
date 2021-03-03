/* eslint-disable jsx-a11y/no-static-element-interactions */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import QuestionForm from '../../containers/QuestionForm';
import Sidebar from '../../containers/Sidebar';
import Planete from '../../data/planetes';

// == Import : style
import './style.scss';

// Custom hook
import useModal from '../../customHooks/useModal';

// == Import: svg
import Lune from '../../assets/images/lune.svg';
import Jupiter from '../../assets/images/jupiter.svg';
import Terre from '../../assets/images/terre.svg';
import Soleil from '../../assets/images/sun.svg';
import Mercure from '../../assets/images/mercure.svg';
import Venus from '../../assets/images/venus.svg';
import Mars from '../../assets/images/mars.svg';
import Uranus from '../../assets/images/uranus.svg';
import Neptune from '../../assets/images/neptune.svg';
import Saturne from '../../assets/images/saturn.svg';
import Etoile from '../../assets/images/etoile.png';

const Planetes = ({ handleSideBar, loading, fetchQuestion }) => {
  const { isShowing, toggleModal } = useModal();
  const handleClick = (e) => {
    fetchQuestion(e.target.id);
  };
  return (
    <>
      <div className="planetes">
        <img src={Etoile} className="etoile" onClick={handleSideBar} alt="" aria-hidden="true" />
        <div>
          <div
            className="soleil-container"
            onClick={(e) => {
              toggleModal();
              handleClick(e);
            }}
            aria-hidden="true"
          >
            <div className="soleil">
              <h1>Soleil</h1>
            </div>
            <img src={Soleil} alt="Soleil" id="7" />
          </div>
          <div className="mercure-container">
            <div className="mercure">
              <img src={Mercure} alt="mercure" />
            </div>
          </div>
          <div className="venus-container">
            <div className="venus">
              <img src={Venus} alt="venus" />
            </div>
          </div>
          <div className="earth-container">
            <div className="earth">
              <img src={Terre} alt="earth" />
            </div>
          </div>
          <div className="moon-container">
            <div className="moon">
              <img src={Lune} alt="moon" />
            </div>
          </div>
          <div className="mars-container">
            <div className="mars">
              <img src={Mars} alt="mars" />
            </div>
          </div>
          <div className="jupiter-container">
            <div className="jupiter">
              <img src={Jupiter} alt="jupiter" />
            </div>
          </div>
          <div className="saturne-container">
            <div className="saturne">
              <img src={Saturne} alt="saturne" />
            </div>
          </div>
          <div className="uranus-container">
            <div className="uranus">
              <img src={Uranus} alt="uranus" />
            </div>
          </div>
          <div className="neptune-container">
            <div className="neptune">
              <img src={Neptune} alt="neptune" />
            </div>
          </div>
          {loading}
          {!loading && (
          <QuestionForm isShowing={isShowing} hide={toggleModal} />)}
        </div>
        <Sidebar listOfCard={Planete} />
      </div>
    </>
  );
};

Planetes.propTypes = {
  handleSideBar: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchQuestion: PropTypes.func.isRequired,
};

export default Planetes;
