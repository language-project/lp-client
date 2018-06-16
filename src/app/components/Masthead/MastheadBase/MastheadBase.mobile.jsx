import { connect } from 'react-redux';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';

export const MASTHEAD_HEIGHT = 46;

const StyledMastheadBase = styled.div`
  align-items: center;
  background-color: white;
  border-bottom: 1px solid ${Color.GRAY5};
  color: ${Color.BLACK4};
  display: flex;
  height: ${MASTHEAD_HEIGHT}px;
  justify-content: space-between;
  padding: 0 7px;
  position: fixed;
  width: 100%;

  i {
    font-size: 20px;
  }
`;

const MastheadBase = (props) => {
  return (
    <StyledMastheadBase>
      {props.children}
    </StyledMastheadBase>
  );
};

export default MastheadBase;
