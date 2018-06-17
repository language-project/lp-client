import PropTypes from 'prop-types';
import * as React from 'react';
import styled  from 'styled-components';

import { border } from '@styles/styles';
import { calculateTime } from '@utils/mathUtils';
import Color from '@constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';
import Lower from './Lower.mobile';
import RelatedTerm from './RelatedTerm.mobile';
import Upper from './Upper.mobile';
import Usage from '@src/components/app/Definition/Usage.mobile'

const StyledDefinition = styled.div`
  border-bottom: 1px solid ${Color.GRAY6};
  padding: 7px 9px;
`;

const Row = styled.div`
  display: ${(props) => props.hide ? 'none' : 'flex'};
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: 7px;
  }
`;

const Pos = styled.div`
  background-color: ${Color.PINK6};
  border-radius: 3px;
  color: ${Color.VIOLET2};
  font-size: 13px;
  font-weight: 600;
  padding: 2px 4px;
`;

const Poss = ({
  poss = [],
}) => {
  return poss.map((p, idx) => {
    return (
      <Pos key={idx}>
        {p.label}
      </Pos>
    );
  });
};

const Definition = ({
  definition,
  downVoted,
  handleClickDefinition,
  handleClickDownvote,
  handleClickUpvote,
  minified = false,
  upVoted,
}) => {
  const updatedTime = (definition && Object.keys(definition).length !== 0)
    ? calculateTime(definition.term.created_at)
    : 0;

  return definition
    ? (
      <StyledDefinition>
        <Row>
          <Upper
            definitionId={definition.id}
            handleClickDefinition={handleClickDefinition}
            termLabel={definition.term.label}
            updatedTime={updatedTime}
            username={definition.user.username}/>
        </Row>
        <Row hide={minified}>
          <Poss poss={definition.poss}/>
        </Row>
        <Row>
          <p>
            {definition.label}
          </p>
        </Row>
        <Row hide={minified}>
          <Usage usages={definition.usages}/>
        </Row>
        <Row hide={minified}>
          <RelatedTerm relatedTerms={definition.relatedTerms}/>
        </Row>
        <Row>
          <Lower 
            downVote={definition.vote.downVoteCount}
            downVoted={downVoted}
            upVote={definition.vote.upVoteCount}
            upVoted={upVoted}
            handleClickDownvote={handleClickDownvote}
            handleClickUpvote={handleClickUpvote}
            targetId={definition.id}/>
        </Row>
      </StyledDefinition>
    )
    : null;
};

Definition.propTypes = {
  definition: PropTypes.any,
  handleClickDefinition: PropTypes.func.isRequired,
  minified: PropTypes.bool,
};

export default Definition;
