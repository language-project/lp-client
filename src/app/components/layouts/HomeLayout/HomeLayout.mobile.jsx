import PropTypes from 'prop-types';
import * as React from 'react';
import { 
  Route, 
  Switch,
  withRouter,
} from 'react-router-dom';
import styled from 'styled-components';

import AppURL from '@constants/AppURL'
import { border } from '@styles/styles';
import Color from '@constants/Color';
import DefineContainer from '@containers/app/DefineContainer/DefineContainer.mobile';
import DefinitionListContainer from '@containers/app/DefinitionListContainer/DefinitionListContainer.mobile';
import Masthead, { MASTHEAD_HEIGHT } from '@components/Masthead/Masthead/Masthead.mobile';
import SignInContainer from '@containers/app/SignInContainer/SignInContainer.mobile';

const StyledHomeLayout = styled.div`
  background-color: ${Color.GRAY9};
  height: 100%;
  overflow-y: scroll;
`;

const Page = styled.div`
  padding-top: ${MASTHEAD_HEIGHT}px;
`;

const HomeLayout = ({
  credential,
}) => {
  return (
    <StyledHomeLayout>
      <Masthead/>
      <Page>
        <Switch>
          <Route 
            exact
            path={AppURL._}
            render={(props) => {
              return <DefinitionListContainer/>;
          }}/>
          <Route 
            path={AppURL.SEARCH}
            render={(props) => {
              return <DefinitionListContainer/>;
          }}/>
          <Route
            component={SignInContainer}
            path={AppURL.SIGNIN}/>

          <Route
            component={DefineContainer}
            path={AppURL.DEFINE}/>

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
            render={(props) => {
              return <div>no route defined</div>
            }}/>
        </Switch>
      </Page>
    </StyledHomeLayout>
  );
};

HomeLayout.propTypes = {
  credential: PropTypes.any,
};

export default withRouter(HomeLayout);
