import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';

const DefaultButton = styled.p`
  align-items: center;
  background-color: ${Color.ORANGE6};
  border-radius: 3px;
  color: ${Color.WHITE5};
  cursor: pointer;
  display: flex;
  height: 30px;
  padding: 0 6px;
`;

DefaultButton.propTypes = {};

export default DefaultButton;
