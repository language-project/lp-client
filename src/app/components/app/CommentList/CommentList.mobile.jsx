import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';
import Comment from '@src/components/app/Comment/Comment.mobile';

const StyledCommentList = styled.div`
`;

const CommentList = (props) => (
  <StyledCommentList>
    <Comment 
      comments={props.comments}
      handleClickReply={props.handleClickReply}
      showReplyForm={props.showReplyForm}/>
  </StyledCommentList>
);

export default CommentList;
