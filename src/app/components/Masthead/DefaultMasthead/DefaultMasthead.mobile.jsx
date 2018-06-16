import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';
import MastheadBase from '@components/Masthead/MastheadBase/MastheadBase.mobile';

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.div`
  cursor: pointer;
  height: 100%;
  padding: 0 4px;
  margin: 0 4px;
`;

const Logo = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const DefaultMasthead = ({
  handleClickHamburger,
  handleClickMarmoymLogo,
  handleClickPencil,
  handleClickSearch,
}) => {
  return (
    <MastheadBase>
      <ButtonGroup>
        <Button onClick={handleClickMarmoymLogo}>
          <Logo>Language Project</Logo>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={handleClickSearch}>
          <Facon label="search"/>
        </Button>
        <Button onClick={handleClickPencil}>
          <Facon label="pencil-square"/>
        </Button>
        <Button onClick={handleClickHamburger}>
          <Facon label="bars"/>
        </Button>
      </ButtonGroup>
    </MastheadBase>
  );
};

DefaultMasthead.propTypes = {
  handleClickHamburger: PropTypes.func.isRequired,
  handleClickMarmoymLogo: PropTypes.func.isRequired,
  handleClickPencil: PropTypes.func.isRequired,
  handleClickSearch: PropTypes.func.isRequired,
};

export default DefaultMasthead;
