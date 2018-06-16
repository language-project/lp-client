import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import DefaultButton from '@components/common/DefaultButton/DefaultButton.mobile';
import Facon from '@components/common/Facon/Facon.mobile';
import MastheadBase from '@components/Masthead/MastheadBase/MastheadBase.mobile';

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 70px;
`;

const RightButtonGroup = ButtonGroup.extend`
  justify-content: flex-end;
`;

const Icon = styled(Facon)`
  cursor: pointer;
`;

const DefineMasthead = ({
  handleClickClose,
  handleClickPost,
}) => {
  return (
    <MastheadBase>
      <ButtonGroup>
        <Icon 
          label="close"
          onClick={handleClickClose}/>
      </ButtonGroup>
      <Title>Define</Title>
      <RightButtonGroup>
        <DefaultButton>POST</DefaultButton>
      </RightButtonGroup>
    </MastheadBase>
  )
};

DefineMasthead.propTypes = {
  handleClickClose: PropTypes.func.isRequired,
  handleClickPost: PropTypes.func.isRequired,
};

export default DefineMasthead;
