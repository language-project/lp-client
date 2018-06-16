import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import MastheadBase from '@components/Masthead/MastheadBase/MastheadBase.mobile';
import QueryDisplay from './QueryDisplay.mobile';

const RightButtonGroup = styled.div`
  display: flex;
  margin-left: auto;
  button {
    width: 36px;
    i {
      cursor: pointer;
      font-size: 20px;
      &:active {
        transform: translate(1px, 1px);
      }
    }
  }
`;

const DefaultMasthead = (props) => {
  return (
    <MastheadBase>
      <span onClick={props.handleClickMarmoymLogo}>
       Language Project
      </span>
      <QueryDisplay
        searchRequested={props.searchRequested}
        handleKeyDown={props.handleKeyDown}/>
      <RightButtonGroup>
        <button>
          <span onClick={props.handleClickSearchIcon}>SC</span>
        </button>
        <button>
          <span onClick={props.handleClickPencilIcon}>WR</span>
        </button>
        <button>
          <span onClick={props.handleClickHamburgerIcon}>HM</span>
        </button>
      </RightButtonGroup>
    </MastheadBase>
  );
};

export default DefaultMasthead;
