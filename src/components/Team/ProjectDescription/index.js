/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './style.scss';
import { ReactComponent as Carty } from '../../../assets/images/carty.svg';

const ProjectDescription = () => (
  <div className="projectDescription">
    <h1 className="projectDescription-title">Qu&apos;est-ce que Mapquiz ?</h1>
    <div className="projectDescription-infos">
      <section className="projectDescription-section">
        <p className="projectDescription-p">
          Mapquiz est une application Web destinée aux jeunes enfants sachant lire ou   accompagnés d’un adulte, qui a pour but de s’amuser tout en répondant à des questions.
          Les quiz portent sur des questions de géographie et d’astronomie.
        </p>
        <p className="projectDescription-p">
          Avec les périodes de confinement, nous avons trouvé utile de mettre à disposition une application gratuite destinée aux enfants, leur permettant d’apprendre sur le thème du monde et de la galaxie.
        </p>
      </section>
      <Carty className="carty" />
    </div>
    <Link to="/manual" className="projectDescription-btn">Besoin d'aide ?</Link>
  </div>
);

export default ProjectDescription;
