import PropTypes from 'prop-types';
import * as React from 'react';
import styled  from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';

const StyledUpper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledBox = styled.div`
  ${border('black')};
  margin-left: ${props => props.left};
  padding: 5px 5px;
  width: ${props => props.size};
`;

const Term = (props) => {
  return (
    <StyledTerm>
      <a href={''}>
        {/* onClick={(e) => { props.handleClickTerm(e, getUrl(props.defId)); }}> */}
        {props.label}
      </a>
    </StyledTerm>
  );
};

const Roman = styled.span`
  margin-left: 3px;
  font-size: 12px;
  color: ${Color.BLACK6};`;

const Upper = ({
  definitionId,
  handleClickDefinition,
  termLabel,
  updatedTime,
  username,
}) => {
  return (
    <StyledUpper>
      <StyledBox 
        onClick={(e) => handleClickDefinition(e, definitionId)}
        size='100%'>
        {termLabel}
      </StyledBox>
      <StyledBox left='8px'>
        {username}
      </StyledBox>
      <StyledBox left='5px'>
        {updatedTime}
      </StyledBox>
    </StyledUpper>
  );
};

Upper.propTypes = {
  definitionId: PropTypes.any,
  handleClickDefinition: PropTypes.func.isRequired,
  termLabel: PropTypes.any,
  updatedTime: PropTypes.any,
  username: PropTypes.any,
};

export default Upper;
