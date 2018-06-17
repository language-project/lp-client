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
  handleClickDefinition,
}) => {
  return definitions.map((d) => {
    return (
      <Definition
        definition={d}
        handleClickDefinition={handleClickDefinition}
        key={d.id}
        minified={true}/>
    );
  });
};

const DefinitionList = ({
  definitions,
  handleClickDefinition,
}) => {
  return (
    <StyledDefinitionList>
      <SearchOptionContainer/>
      <Definitions
        definitions={definitions}
        handleClickDefinition={handleClickDefinition}/>
    </StyledDefinitionList>
  );
};

DefinitionList.propTypes = {
  definitions: PropTypes.array.isRequired,
  handleClickDefinition: PropTypes.func.isRequired,
};

export default DefinitionList;
