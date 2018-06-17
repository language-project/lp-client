import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';
import { withRouter } from 'react-router';

import ActionType from '@constants/ActionType';
import DefinitionList from '@src/components/app/DefinitionList/DefinitionList.mobile';
import { requestDownVoteDefinition, requestGetDefinitions, requestUpVoteDefinition } from '@actions/definitionActions';
import { makeReselectDefinitionList } from '@selectors/definitionSelector';
import withUuid from '@hocs/withUuid';

class DefinitionListContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleClickDefinition = this.handleClickDefinition.bind(this);
    this.handleClickDownvote = this.handleClickDownvote.bind(this);
    this.handleClickUpvote = this.handleClickUpvote.bind(this);
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

  handleClickDownvote(e, targetId, userId) {
    this.props.dispatch(requestDownVoteDefinition({
      componentId: this.props.componentId,
      targetType: 'D',
      targetId: targetId,
      userId: userId,
    }));
  }

  handleClickUpvote(e, targetId, userId) {
    this.props.dispatch(requestUpVoteDefinition({
      componentId: this.props.componentId,
      targetType: 'D',
      targetId: targetId,
      userId: userId,
    }));
  }

  render() {
    return (
      <DefinitionList
        definitions={this.props.definitions}
        updated={this.props.updated}
        handleClickDefinition={this.handleClickDefinition}
        handleClickDownvote={this.handleClickDownvote}
        handleClickUpvote={this.handleClickUpvote}/>
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

const selectUpdatedVote = makeReselectDefinitionList({
  actionType: ActionType.REQUEST_UPVOTE_COMMENTS,
  defaultValue: [],
});

  return (state, props) => {
    console.log(333333, selectDefinitionList(state, props))
    return {
      definitions: selectDefinitionList(state, props),
      updated: selectUpdatedVote(state, props),
    };
  };
};

export default compose(
  withUuid,
  withRouter,
  connect(makeMapStateToProps),
)(DefinitionListContainer);
