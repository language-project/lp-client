import { connect } from 'react-redux';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';

const StyledMastheadBase = styled.div`
  align-items: center;
  background-color: ${Color.WHITE4};
  border-bottom: 1px solid ${Color.GRAY5};
  display: flex;
  height: 46px;
  justify-content: space-between;
  padding: 0 7px;

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
