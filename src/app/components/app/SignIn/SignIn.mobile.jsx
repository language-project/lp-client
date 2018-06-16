import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

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

const SignIn = (props) => (
  <StyledSignIn>
    <Input placeholder="이메일"
      value={props.username}
      onChange={props.handleChangeEmail}/>
    <Input type="password" placeholder="비밀번호"
      value={props.password}
      onChange={props.handleChangePassword}
      onKeyDown={props.handleKeyDown}/>
    <Button onClick={props.handleClick}>
      로그인
    </Button>
    <BottomMenuGroup>
      <Text onClick={props.handleClickSignUp}>회원가입</Text>
      <Text>|</Text>
      <Text>로그인에 문제가 있으신가요?</Text>
    </BottomMenuGroup>
  </StyledSignIn>
);

export default SignIn;
