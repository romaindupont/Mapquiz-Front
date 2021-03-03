/* eslint-disable react/jsx-props-no-spreading */
// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import ProjectDescription from './ProjectDescription';
import Avatar from './Avatar';
import teamData from '../../data/team';

// == Import : style
import './style.scss';

const Team = () => (
  <div className="team">
    <ProjectDescription />
    <h2 className="team-subtitle">Présentation de l&apos;équipe</h2>
    {teamData.map((teammate) => (
      <Avatar
        key={teammate.id}
        {...teammate}
      />
    ))}
    {/* <Greetings /> */}
    <Link to="/" className="team-btn">Accueil</Link>
  </div>
);

export default Team;
