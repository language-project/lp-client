import { compose } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

import DefineMasthead from '@components/Masthead/DefineMasthead/DefineMasthead.mobile';
import Masthead from '@src/components/app/Masthead/Masthead.mobile';
import KeyCode from '@constants/KeyCode';

class DefineMastheadContainer extends React.Component {
  constructor() {
    super();
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClickPost = this.handleClickPost.bind(this); 
  }

  handleClickClose(e) {
    console.log(123, 1);
    this.props.history.goBack();
  }

  handleClickPost(e) {
    console.log(123, 2);
  }

  render() {
    return (
      <DefineMasthead
        handleClickClose={this.handleClickClose}
        handleClickPost={this.handleClickPost}/>
    );
  }
}

DefineMastheadContainer.propTypes = {
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
    };
  };
};

export default compose(
  withRouter,
  connect(makeMapStateToProps),
)(DefineMastheadContainer);
