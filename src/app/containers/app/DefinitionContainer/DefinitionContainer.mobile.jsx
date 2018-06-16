import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';
import { withRouter } from 'react-router';

import ActionType from '@constants/ActionType';
import CommentListContainer from '@containers/app/CommentListContainer/CommentListContainer.mobile';
import DefinitionType from '@models/data/Definition';
import Definition from '@src/components/app/Definition/Definition.mobile';
import { makeReselectDefinition } from '@selectors/definitionSelector';
import { requestGetDefinitionsById } from '@actions/definitionActions';
import withUuid from '@hocs/withUuid';

class DefinitionContainer extends React.Component {
  constructor(...props) {
    super(...props);
  }

  componentDidMount() {
    this.props.dispatch(requestGetDefinitionsById({
      defId: this.props.match.params.defId,
      componentId: this.props.componentId,
    }));
  }

  render() {
    return (
      <div>
        <Definition
          definition={this.props.definition.data}/>
        <CommentListContainer/>
      </div>
      
    );
  }
}

DefinitionContainer.propTypes = {
  componentId: PropTypes.string.isRequired,
  // definition: PropTypes.arrayOf(PropTypes.instanceOf(DefinitionType)),
}

const makeMapStateToProps = (state, props) => {
  const selectDefinition = makeReselectDefinition({
    actionType: ActionType.REQUEST_GET_DEFINITIONS_BY_ID,
  });

  return (state, props) => {
    return {
      definition: selectDefinition(state, props),
    }
  };
};

export default compose(
  withUuid,
  withRouter,
  connect(makeMapStateToProps),
)(DefinitionContainer);
