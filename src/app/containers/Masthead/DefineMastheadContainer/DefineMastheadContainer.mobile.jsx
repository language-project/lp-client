import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

import AppURL from '@constants/AppURL';
import { 
  DEFINE_FORM_ID,
  DEFINE_FORM_VALUES,
} from '@containers/app/DefineContainer/DefineContainer.mobile';
import DefineMasthead from '@components/Masthead/DefineMasthead/DefineMasthead.mobile';
import { requestDefine } from '@actions/definitionActions';
import withUuid from '@hocs/withUuid';

class DefineMastheadContainer extends React.Component {
  constructor() {
    super();
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClickPost = this.handleClickPost.bind(this); 
  }

  handleClickClose(e) {
    this.props.history.goBack();
  }

  handleClickPost(e) {
    const form = document.getElementById(DEFINE_FORM_ID);
    this.props.dispatch(requestDefine({
      componentId: this.props.componentId,
      form: form[DEFINE_FORM_VALUES],
    }))
      .then((res) => {
        if (res.error === undefined) {
          setTimeout(() => {
            this.props.history.push(AppURL._);
          }, 1000);
        }
      });
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
  componentId: PropTypes.string.isRequired,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
    };
  };
};

export default compose(
  withRouter,
  withUuid,
  connect(makeMapStateToProps),
)(DefineMastheadContainer);
