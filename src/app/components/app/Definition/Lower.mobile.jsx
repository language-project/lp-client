import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';
import Vote from '@components/app/Vote/Vote.mobile';

const StyledLower = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const LeftButtonGroup = styled.div`
  align-items: center;
  display: flex;

  > div {
    margin-right: 6px;
    span {
      cursor: pointer;
      margin-right: 2px;
    }
  }
`;

const Lower = ({
  downVote,
  downVoted,
  upVote,
  upVoted,
  targetId,
  handleClickDownvote,
  handleClickUpvote,
}) => {
  return (
    <StyledLower>
      <LeftButtonGroup>
        <div>
          <span>다른뜻</span> 
          <span>3</span>
        </div>
        <div>
          <span>댓글</span> 
          <span>13</span>
        </div>
      </LeftButtonGroup>
      <Vote
        downVote={downVote}
        downVoted={downVoted}
        upVote={upVote}
        upVoted={upVoted}
        handleClickDownvote={handleClickDownvote}
        handleClickUpvote={handleClickUpvote}
        targetId={targetId}/>
    </StyledLower>
  );
};

Lower.propTypes = {
  downVote: PropTypes.number,
  upVote: PropTypes.number,
};

export default Lower;
