import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

import Define from '@src/components/app/Define/Define.mobile';
import { uuid } from '@utils/mathUtils';

export const DEFINE_FORM_ID = uuid('define');
export const DEFINE_FORM_VALUES = '__values';

class DefineContainer extends React.Component {
  constructor() {
    super();
    this.form = undefined;
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  componentDidMount() {
    this.form = document.getElementById(DEFINE_FORM_ID);
    this.form[DEFINE_FORM_VALUES] = {};
  }

  handleChangeValue(e, id) {
    this.form[DEFINE_FORM_VALUES][id] = e.target.value;
  }

  render() {
    return (
      <Define
        handleChangeValue={this.handleChangeValue}
        id={DEFINE_FORM_ID}/>
    );
  }
}

DefineContainer.propTypes = {};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
    };
  };
};

export default compose(
  withRouter,
  connect(makeMapStateToProps),
)(DefineContainer);
