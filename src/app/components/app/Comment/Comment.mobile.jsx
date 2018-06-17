import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import { calculateTime } from '@utils/mathUtils';
import Facon from '@components/common/Facon/Facon.mobile';
import Vote from '@components/app/Vote/Vote.mobile';

const Label = styled.div``;
const Usage = styled.div``;
const Pos = styled.div``;
const Media = styled.div``;

const Row = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding: 4px;
`;

const StyledComment = styled.div`
  padding: 5px 5px;
  margin-top: 15px;
`;

const StyledName = styled.div`
  display: flex;
`;
const StyledVote = styled.div`
  display: flex;
  margin-right: 5px;
`;

const StyledBox = styled.div`
  ${border('black')};
  margin-left: ${props => props.left};
  padding: 5px 5px;
  width: ${props => props.size};
`;

const iterCommentObj = ((comments, childrens, res) => {

  const sortedChildrens = childrens.sort(compareByCreatedTime)
  
  sortedChildrens.forEach((children) => {
    res.push({
      label: comments[children].label,
      depth: comments[children].depth,
    })
    if (comments[children].children.length === 0) {
    // when it has no child
    }
    else {
      iterCommentObj(comments, comments[children].children, res)
    }
  })
  return res;
});

const getGrandParents = ((comments) => {
  const res = []
  Object.entries(comments).forEach(([key, value]) => {
    if (value.depth === 1) {
      res.push(key);
    }
  })
  return res;
});

const compareByCreatedTime = (a, b)  => {
  return a.created_at <= b.created_at;
};

const Comment = ({
  comments = [],
  handleClickReply,
  showReplyForm,
}) => {
  return comments.length > 0
  ? comments.map((comment, idx) => {
    const updatedTime = calculateTime(comment.created_at);
    return (
      <StyledComment key={idx}>
        <Row>
          <StyledName>
            <StyledBox>
              {comment.user.username}
            </StyledBox>
            <StyledBox left='10px'>
              {updatedTime}
            </StyledBox>
          </StyledName>
        </Row>
        <Row>
          <StyledBox size='100%'>
            {comment.content}
          </StyledBox>
        </Row>
        <StyledVote>
          <Vote
            upVoteCount={comment.vote.upVoteCount}
            downVoteCount={comment.vote.downVoteCount}/>
        </StyledVote>
      </StyledComment>
    );
  })
  : null;
  // ? iterCommentObj(comments, getGrandParents(comments), []).map((comment, idx) => {
  //   return (
  //     <StyledComment key={idx} style={{marginLeft: 15 + 20 * (comment.depth - 1)}}>
  //       <div 
  //         data={comment}
  //         > {comment.label}, depth: {comment.depth} </div>
  //       <StyledCommentFunction>
  //         <Facon label=''/>
  //         <div className='comment-option-font'> Reply </div>
  //         {showReplyForm && <div> show reply form </div>}
  //       </StyledCommentFunction>
  //     </StyledComment>
  //   )
  // })
  // : null;
};

export default Comment;
