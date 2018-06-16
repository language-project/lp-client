import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { border } from '@styles/styles';
import Color from '@constants/Color';

const StyledMastheadBase = styled.div`
  align-items: center;
  background-color: ${Color.WHITE4};
  display: flex;
  height: 46px;
  padding: 0 3px;
  ${border('blue')}

  i {
    font-size: 20px;
  }
`;

const MastheadBase = (props) => {
  return (
    <StyledMastheadBase className={props.className}>
      {props.children}
    </StyledMastheadBase>
  );
};

export default MastheadBase;
