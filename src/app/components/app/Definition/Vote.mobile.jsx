import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';

const StyledVoteBox = styled.div`
  display: flex;
  margin-left: auto;
`;

const StyledBox = styled.div`
  ${border('black')};
  margin-left: ${props => props.left};
  padding: 5px 5px;
  width: ${props => props.size};
`;

const Vote = ({
  downVote,
  upVote,
}) => {
  return (
    <StyledVoteBox>
      <StyledBox>
        <Facon label='ellipsis-h'/>
      </StyledBox>
      <StyledBox left='5px'>
        {upVote}
      </StyledBox>
      <StyledBox left='5px'>
        <Facon label='thumbs-up'/>
      </StyledBox>
      <StyledBox left='5px'>
        {downVote}
      </StyledBox>
      <StyledBox left='5px'>
        <Facon label='thumbs-down'/>
      </StyledBox>
    </StyledVoteBox>
  );
};

Vote.propTypes = {
  downVote: PropTypes.number,
  upVote: PropTypes.number,
};

export default Vote;
