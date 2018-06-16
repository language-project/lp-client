import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';
import { withRouter } from 'react-router';

import ActionType from '@constants/ActionType';
import Definition from '@models/data/Definition';
import DefinitionList from '@src/components/app/DefinitionList/DefinitionList.mobile';
import { requestGetDefinitions } from '@actions/definitionActions';
// import {
//   selectCombinedDefinitionsInDisplay,
//   selectDefinitionsInDisplay,
// } from '@selectors/definitionSelector';
import { makeReselectDefinitionList } from '@selectors/definitionSelector';
import SearchOptionContainer from '@containers/app/SearchOptionContainer/SearchOptionContainer.mobile'
import withUuid from '@hocs/withUuid';

class DefinitionListContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleClickTerm = this.handleClickTerm.bind(this);
    this.handleClickDefinition = this.handleClickDefinition.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(requestGetDefinitions({
      componentId: this.props.componentId,
    }));
  }

  handleClickTerm(e, url) {
    // e.preventDefault();
    // this.props.history.push(url);
  }

  handleClickDefinition(e, definitionId) {
    e.stopPropagation();
    this.props.history.push(`/definitions/${definitionId}`);
  }

  render() {
    return (
      <div>
        <SearchOptionContainer/>
        <DefinitionList
          definitions={this.props.definitions}
          handleClickDefinition={this.handleClickDefinition}/>
      </div>
    );
  }
}

DefinitionListContainer.propTypes = {
  componentId: PropTypes.string.isRequired,
  // definitions: PropTypes.arrayOf(PropTypes.instanceOf(Definition)),
};

const makeMapStateToProps = () => {
  const selectDefinitionList = makeReselectDefinitionList({
    actionType: ActionType.REQUEST_GET_DEFINITIONS,
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
