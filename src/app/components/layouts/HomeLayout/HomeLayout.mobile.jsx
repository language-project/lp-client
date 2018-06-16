import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import MastheadContainer from '@containers/app/MastheadContainer/MastheadContainer.mobile';

const HomeLayout = () => {
  return (
    <div>
      <MastheadContainer/>
      home
    </div>
  );
};

export default HomeLayout;
