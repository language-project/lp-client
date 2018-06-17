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
    })).then((res) => {
    });;
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
        downVoted={this.props.downVoted}
        handleClickDefinition={this.handleClickDefinition}
        handleClickDownvote={this.handleClickDownvote}
        handleClickUpvote={this.handleClickUpvote}
        upVoted={this.props.upVoted}/>
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

const selectDownVote = makeReselectDefinitionList({
  actionType: ActionType.REQUEST_DOWNVOTE_DEFINITIONS,
  defaultValue: [],
});

const selectUpVote = makeReselectDefinitionList({
  actionType: ActionType.REQUEST_UPVOTE_DEFINITIONS,
  defaultValue: [],
});

  return (state, props) => {
    return {
      definitions: selectDefinitionList(state, props),
      downVoted: selectDownVote(state, props),
      upVoted: selectUpVote(state, props),
    };
  };
};

export default compose(
  withUuid,
  withRouter,
  connect(makeMapStateToProps),
)(DefinitionListContainer);
