import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

import Define from '@src/components/app/Define/Define.mobile';
import { uuid } from '@utils/mathUtils';

export const DEFINE_FORM_ID = uuid('define');

class DefineContainer extends React.Component {
  constructor() {
    super();
    this.defineRef = React.createRef(); 
    this.state = {
      usages: [
        '',
      ],
    };
  }

  handleClickAddUsage(e) {
    const { usages } = this.state;
    usages.push('');
    this.setState({
      usages,
    });
  }

  render() {
    return (
      <Define
        defineRef={this.defineRef}
        handleClickAddUsage={this.handleClickAddUsage.bind(this)}
        id={DEFINE_FORM_ID}
        usages={this.state.usages}/>
    );
  }
}

DefineContainer.propTypes = {

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
)(DefineContainer);
