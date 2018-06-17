import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import Color from '@constants/Color';
import CommentList from '@components/app/CommentList/CommentList.mobile';
import { makeReselectComments } from '@selectors/definitionSelector';
import { requestGetComments, requestNewComment } from '@actions/commentActions';
import withUuid from '@hocs/withUuid';
import ActionType from '@constants/ActionType';

const Term = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${Color.GRAY5};
  height: 40px;
  padding: 0 5px;
`;

class CommentListContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleClickReply = this.handleClickReply.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      showReplyForm: false,
      replyContent: '',
    }
  }

  componentDidMount() {
    this.props.dispatch(requestGetComments({
      componentId: this.props.componentId,
      targetId: this.props.match.params.defId,
      targetType: "D",
    }));
  }
  
  handleChangeValue(e) {
    this.setState({
      replyContent: e.target.value,
    });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.props.dispatch(requestNewComment({
        componentId: this.props.componentId,
        content: this.state.replyContent,
        targetId: this.props.match.params.defId,
        targetType: "D",
        userId: 1,
      }))
    }
  }

  handleClickReply(e, data) {
    this.setState({
      showReplyForm: true,
    })
  }

  render() {
    return (
      <div>
        <Term
          className="add-comments"
          onChange={(e) => this.handleChangeValue(e)}
          onKeyDown={this.handleKeyDown}
          placeholder={`Write comment`}/>
        <CommentList
          comments={this.props.comments}
          handleClickReply={this.handleClickReply}
          showReplyForm={this.state.showReplyForm}/>
      </div>
    );
  }
}

CommentListContainer.propTypes = {
  componentId: PropTypes.string.isRequired,
};


const makeMapStateToProps = (state, props) => {
  const selectComments = makeReselectComments({
    actionType: ActionType.REQUEST_GET_COMMENTS,
    defaultValue: [],
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
