import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';
import { 
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import DefineMastheadContainer from '@containers/Masthead/DefineMastheadContainer/DefineMastheadContainer.mobile';

const Masthead = () => {
  return (
    <Switch>
      <Route
        component={DefineMastheadContainer}/>
    </Switch>
  )
};

Masthead.propTypes = {};

export default withRouter(Masthead);
