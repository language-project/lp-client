import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';
import { 
  Redirect, 
  withRouter,
} from 'react-router';

import AppURL from '@constants/AppURL';
import KeyCode from '@constants/KeyCode';
import { makeReselectCredential } from '@selectors/authSelector';
import { requestSignInUser } from '@actions/userActions'
import SignIn from '@components/app/SignIn/SignIn.mobile';

class SignInContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClickSignIn = this.handleClickSignIn.bind(this);
    this.handleClickSignUp = this.handleClickSignUp.bind(this);
    this.navigateToMainPage = this.navigateToMainPage.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState((state, props) => {
      return {
        ...state,
        email,
      };
    });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState((state, props) => {
      return {
        ...state,
        password,
      };
    });
  }

  handleKeyDown(e) {
    if (e.keyCode === KeyCode.RETURN) {
      this.dispatchSignIn();
    }
  }

  handleClickSignIn(e) {
    this.dispatchSignIn();
  }

  handleClickSignUp() {
    this.props.history.push('/signup');
  }

  navigateToMainPage(){
    this.props.history.push('/');
  }

  dispatchSignIn() {
    this.props.dispatch(requestSignInUser({
      email: this.state.email,
      password: this.state.password,
    }));
  }

  render() {
    if (this.props.credential) {
      return <Redirect to={AppURL._}/>
    } else {
      return (
        <SignIn
          value={this.state.email}
          member={this.props.member}
          handleChangeEmail={this.handleChangeEmail}
          handleChangePassword={this.handleChangePassword}
          handleKeyDown={this.handleKeyDown}
          handleClickSignIn={this.handleClickSignIn}
          handleClickSignUp={this.handleClickSignUp}/>
      );
    }
  }
}

SignInContainer.propTypes = {
  credential: PropTypes.any,
};

const makeMapStateToProps = () => {
  const selectCredential = makeReselectCredential();

  return (state, props) => {
    return {
      credential: selectCredential(state, props),
    };
  };
};

export default compose(
  withRouter,
  connect(makeMapStateToProps),
)(SignInContainer);
