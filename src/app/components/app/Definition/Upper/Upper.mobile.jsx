import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';

const StyledUpper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledBox = styled.div`
  ${border('black')};
  margin-left: ${props => props.left};
  padding: 5px 5px;
  width: ${props => props.size};
`;

const Term = (props) => {
  return (
    <StyledTerm>
      <a
        href={''}
        >
        {/* onClick={(e) => { props.handleClickTerm(e, getUrl(props.defId)); }}> */}
        {props.label}
      </a>
    </StyledTerm>
  );
};

const Roman = styled.span`
  margin-left: 3px;
  font-size: 12px;
  color: ${Color.BLACK6};`;

const Upper = (props) => {
  return (
    <StyledUpper>
      <StyledBox size='100%'>
          {props.definition.term.label}
        </StyledBox>
        <StyledBox left='8px'>
          {props.definition.user.username}
        </StyledBox>
        <StyledBox left='5px'>
          {props.updatedTime}
        </StyledBox>
    </StyledUpper>
  );
};

export default Upper;
