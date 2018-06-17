import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import { calculateTime } from '@utils/mathUtils';
import Definition from '@components/app/Definition/Definition.mobile'; 
import SearchOptionContainer from '@containers/app/SearchOptionContainer/SearchOptionContainer.mobile'

const StyledDefinitionList = styled.div`
`;

const Definitions = ({
  definitions,
  downVoted,
  handleClickDefinition,
  handleClickDownvote,
  handleClickUpvote,
  upVoted,
}) => {
  return definitions.map((d) => {
    return (
      <Definition
        definition={d}
        downVoted={downVoted}
        handleClickDefinition={handleClickDefinition}
        handleClickDownvote={handleClickDownvote}
        handleClickUpvote={handleClickUpvote}
        key={d.id}
        minified={true}
        upVoted={upVoted}/>
    );
  });
};

const DefinitionList = ({
  definitions,
  downVoted,
  handleClickDefinition,
  handleClickDownvote,
  handleClickUpvote,
  upVoted,
}) => {
  return (
    <StyledDefinitionList>
      <SearchOptionContainer/>
      <Definitions
        definitions={definitions}
        downVoted={downVoted}
        handleClickDefinition={handleClickDefinition}
        handleClickDownvote={handleClickDownvote}
        handleClickUpvote={handleClickUpvote}
        upVoted={upVoted}/>
    </StyledDefinitionList>
  );
};

DefinitionList.propTypes = {
  definitions: PropTypes.array.isRequired,
  handleClickDefinition: PropTypes.func.isRequired,
};

export default DefinitionList;
