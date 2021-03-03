/* eslint-disable react/jsx-props-no-spreading */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Card from './Card';
import close from '../../assets/images/close.png';

// == Import : style
import './styles.scss';

const Sidebar = ({ listOfCard, sideBarView, handleBar }) => (
  <div className={sideBarView ? 'sidebar' : 'sidebar-active'} id="side">
    <img src={close} className="close" onClick={handleBar} alt="" aria-hidden="true" />
    {listOfCard.map((card) => (
      <Card key={card.title} {...card} />
    ))}
  </div>
);

Sidebar.propTypes = {
  listOfCard: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    }),
  ).isRequired,
  sideBarView: PropTypes.bool.isRequired,
  handleBar: PropTypes.func.isRequired,
};

export default Sidebar;
