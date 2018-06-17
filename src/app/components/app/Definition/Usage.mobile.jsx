import PropTypes from 'prop-types';
import * as React from 'react';
import styled  from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';

const StyledUsage = styled.div`
  border-left: 3px solid ${Color.GRAY4};
  padding: 2px 5px;
  width: 100%;

  > div {
  }
`;

const Usage = ({
  usages = []
}) => {
  return usages.length > 0
    ? (
      <StyledUsage>
        {usages.map((usage, idx) => {
          return (
            <div key={idx}>
              {usage.label}
            </div>
          );
        })}
    </StyledUsage>
    )
  : null;
};

export default Usage;
