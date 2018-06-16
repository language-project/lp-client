import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import { calculateTime } from '@utils/mathUtils';

const Row = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding: 4px;
`;

const StyledDefinition = styled.div`
  ${border('black')};
  margin-top: 5px;
  padding: 8px 0px;
`;

const StyledBox = styled.div`
  ${border('black')};
  margin-left: ${props => props.left};
  padding: 5px 5px;
  width: ${props => props.size};
`;

const StyledVoteBox = styled.div`
  display: flex;
`;

const StyledFunctionBox = styled.div`
  display: flex;
`;

const Definition = ({
  definition,
  handleClick,
  updatedTime,
}) => {
  return (
    <StyledDefinition
      onClick = {(e) => {
      handleClick(e, definition.id);
    }}>
      <Row>
        <StyledBox size = '100%'>
          {definition.term.label}
        </StyledBox>
        <StyledBox left = '8px'>
          {definition.user.username}
        </StyledBox>
        <StyledBox left = '5px'>
          {updatedTime}
        </StyledBox>
      </Row>
      <Row>
        <StyledBox size = '100%'>
          {definition.label}
        </StyledBox>
      </Row>
      <Row>
        <StyledFunctionBox>
          <StyledBox>
            다른뜻 3
          </StyledBox>
          <StyledBox left = '5px'>
            댓글 3
          </StyledBox>
        </StyledFunctionBox>
        <StyledVoteBox>
          <StyledBox>
            {definition.vote.upVoteCount}
          </StyledBox>
          <StyledBox left = '5px'>
            {/* <UpvoteIcon/> */}
            UP
          </StyledBox>
          <StyledBox left = '5px'>
            {definition.vote.downVoteCount}
          </StyledBox>
          <StyledBox left = '5px'>
            DW
          </StyledBox>
        </StyledVoteBox>
      </Row>
    </StyledDefinition>
  );
};

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
};

const Definitions = (props) => {
  return (props.definitions.data && props.definitions.data.map) 
    ? props.definitions.data.map((definition, idx) => {
      const updatedTime = calculateTime(definition.term.created_at);
      return (
        <Definition
          handleClick={props.handleClickDefinition}
          key={idx}
          definition={definition}
          updatedTime={updatedTime}/>
      );
      // return (
      //   <DefinitionPane
      //     key={Definition.get('id')}
      //     Definition={Definition}
      //     handleClickTerm={props.handleClickTerm}/>
      // );
    })
    : null;
};

const StyledDefinitionList = styled.div`
`;

const DefinitionList = ({
  definitions,
  handleClickDefinition,
}) => {
  return (
    <StyledDefinitionList>
      <Definitions 
        definitions={definitions}
        handleClickDefinition={handleClickDefinition}/>
    </StyledDefinitionList>
  );
};

DefinitionList.propTypes = {
  definitions: PropTypes.array,
  handleClickDefinition: PropTypes.func.isRequired,
};

export default DefinitionList;
