import PropTypes from 'prop-types';
import * as React from 'react';
import styled  from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';

const StyledUpper = styled.div`
  color: ${Color.GRAY1};
  display: flex;
  font-size: 13px;
  margin-bottom: 2px;
  width: 100%;
`;

const Term = styled.div`
  align-items: center;
  color: ${Color.BLACK2};
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  font-size: 15px;
  font-weight: 600;
`;

const Meta = styled.div`
  margin-left: 7px;
`;

const Upper = ({
  definitionId,
  handleClickDefinition,
  termLabel,
  updatedTime,
  username,
}) => {
  return (
    <StyledUpper>
      <Term
        onClick={(e) => handleClickDefinition(e, definitionId)}
        size='100%'>
        {termLabel}
      </Term>
      <Meta>
        {username}
      </Meta>
      <Meta>
        {updatedTime}
      </Meta>
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
