import { 
  BrowserRouter, 
  Route, 
  Switch, 
} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';

import AppURL from '@constants/AppURL';
import ErrorLayout from '@components/layouts/ErrorLayout/ErrorLayout.mobile';
import HomeLayout from '@components/layouts/HomeLayout/HomeLayout.mobile';

class RouterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      errorDidOccur: false,
    };
  }

  componentDidMount() {
  }

  componentDidCatch(err) {
    console.error(err);
    this.setState(() => ({
      errorDidOccur: true,
    }));
  }

  renderRoute() {
    if (this.state.errorDidOccur) {
      return <ErrorLayout/>;
    } else {
      return (
        <Switch>
          <Route
            exact
            path={AppURL._}
            render={() => {
              return <HomeLayout/>
          }}/>
          <Route 
            exact 
            path={AppURL.SIGNIN}
            render={(props) => {
              return this.props.tokenIsValid 
                ? <Redirect to={AppURL._}/>
                : <div>sign in</div>
          }}/>
          <Route 
            render={(props) => {
              return <HomeLayout/>;
          }}/>;
        </Switch>
      );
    }
  }

  render() {
    return (
      <BrowserRouter>
        {this.renderRoute()}
      </BrowserRouter>
    );
  }
}

RouterContainer.propTypes = {
};

export default RouterContainer;
