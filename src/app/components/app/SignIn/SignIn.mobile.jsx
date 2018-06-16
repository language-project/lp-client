import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';

const Email = styled.div``;
const Password = styled.div``;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid #c5b9ce;
  border-radius: 3px;
  margin-bottom: 10px;

  ::placeholder {
    color: ${Color.BLACK5};
    opacity: 1;
  }
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-top: 3px;
  border: 1px solid #c5b9ce;
  border-radius: 5px;
  background-color: ${Color.GRAY5};
  cursor: pointer;

  &:hover {
    color: black;
    background-color: ${Color.BLACK6};
    box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.75);
  }
`;

const Checkbox = styled.input`
  margin-top: 3px;
  padding: 9px 12px;
`;

const CheckboxText = styled.div`
  display: inline;
  margin-top: 3px;
  padding: 9px 12px;
`;

const Text = styled.span`
  color: ${Color.GRAY4};
`;

const TextIcon = styled.span``;

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
        placeholder="이메일"
        value={username}/>
      <Input 
        onChange={handleChangePassword}
        onKeyDown={handleKeyDown}
        placeholder="비밀번호"
        type="password"
        value={password}/>
      <Button onClick={handleClickSignIn}>
        로그인
      </Button>
      <BottomMenuGroup>
        <Text onClick={handleClickSignUp}>회원가입</Text>
        <Text>|</Text>
        <Text>로그인에 문제가 있으신가요?</Text>
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
