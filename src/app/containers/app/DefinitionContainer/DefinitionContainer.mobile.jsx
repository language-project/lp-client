import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';
import { withRouter } from 'react-router';

import ActionType from '@constants/ActionType';
import CommentListContainer from '@containers/app/CommentListContainer/CommentListContainer.mobile';
import Definition from '@src/components/app/Definition/Definition.mobile';
import { makeReselectDefinition } from '@selectors/definitionSelector';
import { requestGetDefinitionsById } from '@actions/definitionActions';
import withUuid from '@hocs/withUuid';

class DefinitionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickDefinition = this.handleClickDefinition.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(requestGetDefinitionsById({
      defId: this.props.match.params.defId,
      componentId: this.props.componentId,
    }));
  }

  handleClickDefinition(e, definitionId) {
    e.stopPropagation();
    this.props.history.push(`/definitions/${definitionId}`);
  }

  render() {
    if (this.props.definition === null) return null;

    return (
      <div>
        <Definition 
          definition={this.props.definition}
          handleClickDefinition={this.handleClickDefinition}/>
        <CommentListContainer/>
      </div>
    );
  }
}

DefinitionContainer.propTypes = {
  componentId: PropTypes.string.isRequired,
  definition: PropTypes.any,
}

const makeMapStateToProps = (state, props) => {
  const selectDefinition = makeReselectDefinition({
    actionType: ActionType.REQUEST_GET_DEFINITIONS_BY_ID,
    defaultValue: null,
  });

  return (state, props) => {
    return {
      definition: selectDefinition(state, props),
    };
  };
};

export default compose(
  withUuid,
  withRouter,
  connect(makeMapStateToProps),
)(DefinitionContainer);
