import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import { calcUpdatedTime } from '@utils/mathUtils';
import withUuid from '@hocs/withUuid';

const searchOptionList = [
  'newest',
  'score',
]

const StyledDropDown = styled.div`
  ${border('gray')};
  margin-right: 10px;
  margin-left: auto;
`

const StyledDropDownList = styled.div`
  margin-top: 5px;
`

const StyledDropDownElem = styled.div`
  margin-top: 5px;
`

const StyledSearchOption = styled.div`
  margin-top: 5px;  
  padding: 8px 0px;
  display: flex;
  text-align: right
`

const StyledSelectedOption = styled.div`
  ${border('gray')};
  padding: 5px 5px;
`


class SearchOptionContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.toggleList = this.toggleList.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.state = {
      listOpen: false,
      selectedOption: 'newest',
    };
  }
  handleClickOutside() {
    this.setState({
     listOpen: false
    })
  };

  toggleItem(e){
    this.setState({
      selectedOption: e.target.dataset.id,
      listOpen: !this.state.listOpen,
    })
  }

  toggleList() {
    this.setState({
      listOpen: !this.state.listOpen
    })
  };

  render() {
    return (
      <StyledSearchOption> 
        <SearchOptionDropDown 
          selectedOption={this.state.selectedOption}
          listOpen={this.state.listOpen}
          toggleItem={this.toggleItem}
          toggleList={this.toggleList}/>
      </StyledSearchOption>
    )
  }
}

const SearchOptionDropDown = (props) => {
  return (
    <StyledDropDown>
      <StyledSelectedOption onClick={props.toggleList}>
        {props.selectedOption}
      </StyledSelectedOption>
        {props.listOpen &&
          <StyledDropDownList>
            {searchOptionList.map((elem, idx) => (
            <StyledDropDownElem onClick={props.toggleItem} key={idx} data-id = {elem}> {elem} </StyledDropDownElem>
            ))}
          </StyledDropDownList>}
    </StyledDropDown>
  );
};

SearchOptionContainer.propTypes = {
}

export default compose(
  withUuid,
  withRouter,
)(SearchOptionContainer);
