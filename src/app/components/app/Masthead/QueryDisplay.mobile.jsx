import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';

const StyledQueryDisplay = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

const QueryInput = styled.input`
  width: 150px;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${Color.BLACK5};
`;

const QueryDisplay = (props) => {
  return (
    <StyledQueryDisplay>
      <span>
        {props.searchRequested}
      </span>
    </StyledQueryDisplay>
  );
};

QueryDisplay.propTypes = {

};

export default QueryDisplay;
