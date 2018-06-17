import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';

const StyledVote = styled.div`
  display: flex;

  > div {
    padding: 3px 0;
    margin-left: 6px;
  }
`;

const Vote = ({
  downVote,
  downVoted,
  targetId,
  upVote,
  upVoted,
  handleClickDownvote,
  handleClickUpvote,
  ...restProps,
}) => {
  if (upVoted && upVoted.targetId === targetId) {
    upVote = upVoted.vote.upVoteCount;
  }
  if (downVoted && downVoted.targetId === targetId) {
    downVote = downVoted.vote.downVoteCount;
  }
  return (
    <StyledVote {...restProps}>
      <div>
        <Facon label='ellipsis-h'/>
      </div>
      <div left='5px'>
        {upVote}
      </div>
      <div left='5px'>
        <Facon label='thumbs-up' onClick={(e) => handleClickUpvote(e, targetId, 17)}/>
      </div>
      <div left='5px'>
        {downVote}
      </div>
      <div left='5px'>
        <Facon label='thumbs-down' onClick={(e) => handleClickDownvote(e, targetId, 17)}/>
      </div>
    </StyledVote>
  );
};

Vote.propTypes = {
};

export default Vote;
