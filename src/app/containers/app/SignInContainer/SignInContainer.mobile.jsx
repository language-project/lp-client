import { compose } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { withRouter } from 'react-router';

import SignIn from '@src/components/app/SignIn/SignIn.mobile';
import KeyCode from '@constants/KeyCode';
// import { requestSignInUser } from '@actions/userActions'

class SignInContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    // if (e.nativeEvent.which === MouseEvent.LEFT_CLICK) {
    //   this.dispatchSignIn();
    // }
  }

  dispatchSignIn() {
    // this.props.dispatch(requestSignInUser({
    //   email: this.state.email,
    //   password: this.state.password,
    // })).then((res) => {
    //   if (res.msg === "success") {
    //     this.props.history.push(`/`);
    //   }
    // });
  }

  handleClickSignUp() {
    this.props.history.push('/signup');
  }

  navigateToMainPage(){
    this.props.history.push('/');
  }

  render() {
    return (
      <SignIn
        value={this.state.email}
        member={this.props.member}
        handleChangeEmail={this.handleChangeEmail}
        handleChangePassword={this.handleChangePassword}
        handleClickSignUp={this.handleClickSignUp}
        handleKeyDown={this.handleKeyDown}
        handleClick={this.handleClick}/>
    );
  }
}

const makeMapStateToProps = (state, props) => {
  return {
    ...state
  };
};

export default compose(
  withRouter,
  connect(makeMapStateToProps),
)(SignInContainer);
