import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';

const Row = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
`;
const StyledDefinition = styled.div`
  margin-top: 5px;
  padding: 8px 0px;
  ${border('black')};
`;

const Definition = ({
  definition,
  handleClick,
}) => {
  return (
    <StyledDefinition
    onClick = {(e) => {
      handleClick(e, definition.get('id'));
    }}>
      <Row>
        {definition.get('term').label}
      </Row>
      <Row>
        <div>
          {definition.get('label')}
        </div>
      <Poss poss={definition.get('poss')}/>
      </Row>
    </StyledDefinition>
  )
}

const Poss = ({
  poss,
}) => {
  return (poss && poss.map) 
    ? poss.map((elem, idx) => {
      return (
        <Row key={idx}>
          {elem.label}
        </Row>
      );
    })
    : null;
}
const Definitions = (props) => {
  return (props.definitions && props.definitions.map) 
    ? props.definitions.map((definition, idx) => {
      return (
        <Definition
          handleClick={props.handleClickDefinition}
          key={idx}
          definition={definition}/>
      );
      // return (
      //   <DefinitionPane
      //     key={Definition.get('id')}
      //     Definition={Definition}
      //     handleClickTerm={props.handleClickTerm}/>
      // );
    })
    : null;
}

const StyledDefinitionList = styled.div`
`;

const DefinitionList = ({
  definitions,
  handleClickDefinition,
}) => (
  <StyledDefinitionList>
    <Definitions 
      definitions={definitions}
      handleClickDefinition={handleClickDefinition}/>
  </StyledDefinitionList>
);

DefinitionList.propTypes = {
  definitions: PropTypes.array,
  handleClickDefinition: PropTypes.func.isRequired,
}

export default DefinitionList;
