import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';
import Facon from '@components/common/Facon/Facon.mobile';
import Vote from '@components/app/Definition/Vote.mobile'

const StyledLower = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledVoteBox = styled.div`
  display: flex;
`;

const StyledFunctionBox = styled.div`
  display: flex;
`;

const StyledBox = styled.div`
  ${border('black')};
  margin-left: ${props => props.left};
  padding: 5px 5px;
  width: ${props => props.size};
`;

const Lower = (props) => {
  return (
    <StyledLower>
      <StyledFunctionBox>
        <StyledBox>
          다른뜻 3
        </StyledBox>
        <StyledBox left='5px'>
          댓글 3
        </StyledBox>
      </StyledFunctionBox>
      <Vote
        upVoteCount={props.definition.vote.upVoteCount}
        downVoteCount={props.definition.vote.downVoteCount}/>
    </StyledLower>
  );
};

export default Lower;
