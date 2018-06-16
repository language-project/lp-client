import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';
import Facon from '@components/common/Facon/Facon.mobile';

const StyledVoteBox = styled.div`
  display: flex;
`;

const StyledBox = styled.div`
  ${border('black')};
  margin-left: ${props => props.left};
  padding: 5px 5px;
  width: ${props => props.size};
`;

const Vote = (props) => {
  return (
    <StyledVoteBox>
      <StyledBox>
        <Facon label='ellipsis-h'/>
      </StyledBox>
      <StyledBox left='5px'>
        {props.upVoteCount}
      </StyledBox>
      <StyledBox left='5px'>
        <Facon label='thumbs-up'/>
      </StyledBox>
      <StyledBox left='5px'>
        {props.downVoteCount}
      </StyledBox>
      <StyledBox left='5px'>
        <Facon label='thumbs-down'/>
      </StyledBox>
    </StyledVoteBox>
  );
};

export default Vote;
