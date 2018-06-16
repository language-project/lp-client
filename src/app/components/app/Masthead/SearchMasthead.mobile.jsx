import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';
import MastheadBase from '@components/Masthead/MastheadBase/MastheadBase.mobile';
import SearchInput from './SearchInput.mobile';

const RemoveIcon = (props) => {
  return props.query.length ? <Facon icon={'fa-times'}/> : null;
};

const LeftArrowIcon = styled(Facon)`
  cursor: pointer;
`;

const ExtendedMastheadBase = styled(MastheadBase)`
  padding: 0 10px;

  div {
    margin-left: 7px;
  }

  .remove {
    margin-left: auto;
    font-size: 17px;
  }
`;

const SearchMasthead = (props) => {
  return (
    <ExtendedMastheadBase>
      <LeftArrowIcon
        icon={'arrow-left'}
        onClick={props.handleClickLeftArrowIcon}/>
      <SearchInput
        query={props.query}
        handleChangeQuery={props.handleChangeQuery}
        handleKeyDown={props.handleKeyDown}/>
      <RemoveIcon query={props.query}/>
    </ExtendedMastheadBase>
  );
};

export default SearchMasthead;
