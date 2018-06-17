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

const Row = styled.div`
  display: ${(props) => props.hide ? 'none' : 'flex'};
  font-size: 15px;
  margin: 5px 7px;
  justify-content: space-between;
`;

const StyledBox = styled.div`
  ${border('black')};
  margin-left: ${props => props.left};
  padding: 5px 5px;
  width: ${props => props.size};
`;

const StyledDefinition = styled.div`
  margin: 5px 0px;
  ${border('black')};
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
