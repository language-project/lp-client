import PropTypes from 'prop-types';
import * as React from 'react';
import styled  from 'styled-components';

import { border } from '@styles/styles';
import { calculateTime } from '@utils/mathUtils';
import Color from '@constants/Color';
import Lower from './Lower/Lower.mobile';
import Upper from './Upper/Upper.mobile';
import Usage from '@src/components/app/Definition/usage.mobile'

const Row = styled.div`
  margin: 5px 7px;
  display: flex;
  font-size: 15px;
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
  })
};

const Definition = ({
  definition,
}) => {
  const updatedTime = (definition && Object.keys(definition).length !== 0)
    ? calculateTime(definition.term.created_at)
    : 0;

  return definition
    ? (
      <StyledDefinition>
        <Row>
          <Upper 
            definition={definition} 
            updatedTime={updatedTime}/>
        </Row>
        <Row>
          <StyledBox size='100%'>
            {definition.label}
          </StyledBox>
        </Row>
        <Row>
          <Poss poss={definition.poss}/>
        </Row>
        <Row>
          <Lower definition={definition}/>
        </Row>
        <Row>
          <Usage usages={definition.usages}/>
        </Row>
      </StyledDefinition>
    )
    : null;
};

Definition.propTypes = {
  definition: PropTypes.any,
};

export default Definition;
