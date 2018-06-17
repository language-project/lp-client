import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import CommentList from '@components/app/CommentList/CommentList.mobile';
import { makeReselectComments } from '@selectors/definitionSelector';
import { requestGetComments } from '@actions/commentActions';
import withUuid from '@hocs/withUuid';
import ActionType from '@constants/ActionType';

class CommentListContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleClickReply = this.handleClickReply.bind(this);
    this.state = {
      showReplyForm: false,
    }
  }

  componentDidMount() {
    this.props.dispatch(requestGetComments({
      targetType: "D",
      targetId: this.props.match.params.defId,
      componentId: this.props.componentId,
    }));
  }

  handleClickReply(e, data) {
    this.setState({
      showReplyForm: true,
    })
  }

  render() {
    return (
      <CommentList
        comments={this.props.comments}
        handleClickReply={this.handleClickReply}
        showReplyForm={this.state.showReplyForm}/>
    );
  }
}

CommentListContainer.propTypes = {
  componentId: PropTypes.string.isRequired,
};


const makeMapStateToProps = (state, props) => {
  const selectComments = makeReselectComments({
    actionType: ActionType.REQUEST_GET_COMMENTS,
  });

  return (state, props) => {
    return {
      comments: selectComments(state, props),
    };
  };
};

export default compose(
  withUuid,
  withRouter,
  connect(makeMapStateToProps),
)(CommentListContainer);
