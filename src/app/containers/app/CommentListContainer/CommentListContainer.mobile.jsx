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
      dummy: {
        1: {
          children: [8, 3],
          depth: 1,
          label: '와지립니다',
          vote: 3,
          created_at: 20170801
        },
        8: {
          children: [],
          depth: 2,
          label: '강츄!!!',
          vote: 3,
          created_at: 20170901
        },
        3: {
          children: [4],
          depth: 2,
          label: '오오오 좋은정보 감사영',
          vote: 3,
          created_at: 20171001
        },
        5: {
          children: [2],
          depth: 1,
          label: '앙 기무뛰~~',
          vote: 3,
          created_at: 20171001
        },
        4: {
          children: [],
          depth: 3,
          label: 'ㅣ띠뚜뛰뚜뛰~',
          vote: 3,
          created_at: 20171001
        },
        2: {
          children: [],
          depth: 2,
          label: 'Hey, Guys~',
          vote: 3,
          created_at: 20171101
        },
      },
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
      <div>
        <CommentList
          comments={this.props.comments.data}
          handleClickReply={this.handleClickReply}
          showReplyForm={this.state.showReplyForm}/>
          {/* comments={this.props.comments} */}
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
