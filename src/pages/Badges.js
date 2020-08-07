import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import conflogo from '../images/logo-urbe-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';

import api from '../api';

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };  
  componentDidMount () {
    this.fetchData();

    this.intercalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render(){
    if(this.state.loading === true && !this.state.data) {
      return <PageLoading/>;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={conflogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges_-container">
          <div className="Badges__buttons mr-4">
            <Link to="/badges/new" className="btn btn-primary">
              Nuevo Badge
            </Link>
          </div>

          <div className='Badges__list'>
            <div className= 'Badges__container'>
              <BadgesList badges ={this.state.data}/>
              {this.state.loading && <MiniLoader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
