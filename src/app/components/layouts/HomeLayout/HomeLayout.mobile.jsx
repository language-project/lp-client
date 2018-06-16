import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';
import { withRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

import AppURL from '@constants/AppURL'
import { border } from '@styles/styles';
import Color from '@constants/Color';
import DefinitionListContainer from '@containers/app/DefinitionListContainer/DefinitionListContainer.mobile';
import MastheadContainer from '@containers/app/MastheadContainer/MastheadContainer.mobile';
import SignInContainer from '@containers/app/SignInContainer/SignInContainer.mobile';

const Page = styled.div`
  ${border('red')}
`;

const HomeLayout = () => {
  return (
    <div>
      <MastheadContainer/>
      <Page>
        <Switch>
          <Route 
            path={AppURL.SEARCH}
            render={(props) => {
              return <DefinitionListContainer/>;
          }}/>

          <Route
            component={SignInContainer}
            path={AppURL.SIGNIN}/>

          {/* <Route
            path={AppURL.DEFINE}
            render={(props) => {
              return <DefineContainer/>;
            }}/>

          <Route 
            path={AppURL.DEFINITIONS_DEFID}
            render={(props) => {
              return (
                <div>
                  <DefinitionContainer/>
                  <CommentlistContainer/>
                </div>
              );
            }}/>
          */}
          <Route
            render={(props) => (
              <DefinitionListContainer/>
            )}/>
        </Switch>
      </Page>
    </div>
  );
};

export default withRouter(HomeLayout);
