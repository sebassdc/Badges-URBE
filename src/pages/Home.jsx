import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import platziconfLogoImage from '../images/logo-urbe8.svg';
import astronautsImage from '../images/logo-urbe4.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={platziconfLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>Sistema de Gestión de Badges</h1>
              <Link className="btn btn-primary" to="/badges">
                Empezar
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={astronautsImage}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
