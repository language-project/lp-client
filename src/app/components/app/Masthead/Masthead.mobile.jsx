import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import DefaultMasthead from './DefaultMasthead.mobile';
import SearchMasthead from './SearchMasthead.mobile';

const Masthead = (props) => {
  const { displayName } = props;

  switch (displayName) {
    case 'SEARCH':
      return (
        <SearchMasthead
          query={props.query}
          handleChangeQuery={props.handleChangeQuery}
          handleClickLeftArrowIcon={props.handleClickLeftArrowIcon}
          handleKeyDown={props.handleKeyDown}/>
      );

    case '/':
    default:
      return (
        <DefaultMasthead
          searchRequested={props.searchRequested}
          modalIsVisible={props.modalIsVisible}
          handleClickMarmoymLogo={props.handleClickMarmoymLogo}
          handleClickPencilIcon={props.handleClickPencilIcon}
          handleClickHamburgerIcon={props.handleClickHamburgerIcon}
          handleClickSearchIcon={props.handleClickSearchIcon}
          handleClickBackdrop={props.handleClickBackdrop}/>
      );
  }
};

export default Masthead;
