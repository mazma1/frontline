import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from "../../actions/auth";

import LoginForm from './LoginForm';

class LoginPage extends React.Component {

  submit =(data) => 
    this.props.login(data).then(() => this.props.history.push('/main'))

  render() {
    return(
      <LoginForm submit={this.submit} />
    )
  }
};

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage)