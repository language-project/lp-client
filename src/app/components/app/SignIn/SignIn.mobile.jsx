import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';

const Input = styled.input`
  border-bottom: 1px solid ${Color.GRAY5};
  font-size: 15px;
  height: 40px;
  margin-bottom: 10px;
  padding: 5px 0;
  width: 100%;

  ::placeholder {
    color: ${Color.BLACK5};
    opacity: 1;
  }
`;

const Button = styled.button`
  align-items: center;
  background-color: ${Color.ORANGE6};
  border-radius: 3px;
  color: ${Color.WHITE5};
  cursor: pointer;
  display: flex;
  font-size: 15px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  margin-top: 3px;
  width: 100%;
`;

const Text = styled.span`
  color: ${Color.GRAY4};
`;

const BottomMenuGroup = styled.div`
  margin-top: 3px;
  padding: 9px 12px;
  text-align: center;

  > span:not(:nth-child(2)) {
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
  
  > span:not(:last-child) {
    margin-right: 4px;
  }
`;

const StyledSignIn = styled.div`
  background-color: white;
  padding: 10px;
`;

const SignIn = ({
  handleChangeEmail,
  handleChangePassword,
  handleClickSignIn,
  handleClickSignUp,
  handleKeyDown,
  password,
  username,
}) => {
  return (
    <StyledSignIn>
      <Input 
        onChange={handleChangeEmail}
        placeholder={"Email"}
        value={username}/>
      <Input
        onChange={handleChangePassword}
        onKeyDown={handleKeyDown}
        placeholder={"Password"}
        type="password"
        value={password}/>
      <Button onClick={handleClickSignIn}>
        Sign In
      </Button>
      <BottomMenuGroup>
        <Text onClick={handleClickSignUp}>
          Sign Up
        </Text>
        <Text>|</Text>
        <Text>Problems signing in?</Text>
      </BottomMenuGroup>
    </StyledSignIn>
  );
};

SignIn.propTypes = {
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  handleClickSignIn: PropTypes.func.isRequired,
  handleClickSignUp: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  password: PropTypes.string,
  username: PropTypes.string,
};

export default SignIn;
