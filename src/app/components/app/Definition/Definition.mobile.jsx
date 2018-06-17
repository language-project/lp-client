import PropTypes from 'prop-types';
import * as React from 'react';
import styled  from 'styled-components';

import { border } from '@styles/styles';
import { calculateTime } from '@utils/mathUtils';
import Color from '@constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';
import Lower from './Lower.mobile';
import Upper from './Upper.mobile';
import Usage from '@src/components/app/Definition/usage.mobile'

const StyledDefinition = styled.div`
  border-bottom: 1px solid ${Color.GRAY6};
  padding: 7px 6px;
`;

const Row = styled.div`
  display: ${(props) => props.hide ? 'none' : 'flex'};
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: 7px;
  }
`;

const StyledBox = styled.div`
  width: ${props => props.size};
`;

const Poss = ({
  poss = [],
}) => {
  return poss.map((elem, idx) => {
    return (
      <StyledBox key={idx}>
        {elem.label}
      </StyledBox>
    );
  });
};

const Definition = ({
  definition,
  handleClickDefinition,
  minified = false,
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
          <StyledBox size='100%'>
            {definition.label}
          </StyledBox>
        </Row>
        <Row>
          <Lower 
            downVote={definition.vote.downVoteCount}
            upVote={definition.vote.upVoteCount}/>
        </Row>
        <Row hide={minified}>
          <Usage usages={definition.usages}/>
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
