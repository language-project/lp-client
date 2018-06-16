import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';

const StyledUsage = styled.div`
  width: 100%;
  ${border('black')};
`;

const Usage = ({
  usages
}) => {
  return (usages && usages.map)
    ? usages.map((usage, idx) => {
      return (
        <StyledUsage key={idx}>
          {usage.label}
        </StyledUsage>
      );
    })
  : null;
}

export default Usage;
