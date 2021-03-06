import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'

import WelcomePage from "./WelcomePage/WelcomePage";
import * as actions from "../actions/auth";
import Home from '../Pages/Home/Home'
import { Redirect } from 'react-router-dom';
import Main from '../components/Main';


const LandingPage = ({ isAuthenticated }) => (
  <div>
    {isAuthenticated ? (
      <Main />
    ) : (
        <WelcomePage />
      )}
  </div>
);

LandingPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps)(LandingPage);