import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';
import { withRouter } from 'react-router';

import ActionType from '@constants/ActionType';
import DefinitionList from '@src/components/app/DefinitionList/DefinitionList.mobile';
import { requestGetDefinitions } from '@actions/definitionActions';
import { makeReselectDefinitionList } from '@selectors/definitionSelector';
import withUuid from '@hocs/withUuid';

class DefinitionListContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleClickDefinition = this.handleClickDefinition.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(requestGetDefinitions({
      componentId: this.props.componentId,
    }));
  }

  handleClickDefinition(e, definitionId) {
    e.stopPropagation();
    this.props.history.push(`/definitions/${definitionId}`);
  }

  render() {
    return (
      <DefinitionList
        definitions={this.props.definitions}
        handleClickDefinition={this.handleClickDefinition}/>
    );
  }
}

DefinitionListContainer.propTypes = {
  componentId: PropTypes.string.isRequired,
  definitions: PropTypes.any,
};

const makeMapStateToProps = () => {
  const selectDefinitionList = makeReselectDefinitionList({
    actionType: ActionType.REQUEST_GET_DEFINITIONS,
    defaultValue: [],
  });

  return (state, props) => {
    return {
      definitions: selectDefinitionList(state, props),
    };
  };
};

export default compose(
  withUuid,
  withRouter,
  connect(makeMapStateToProps),
)(DefinitionListContainer);
