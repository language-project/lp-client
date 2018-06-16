import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

import AppURL from '@constants/AppURL';
import DefaultMasthead from '@components/Masthead/DefaultMasthead/DefaultMasthead.mobile';
import withUuid from '@hocs/withUuid';

class DefaultMastheadContainer extends React.Component {
  constructor() {
    super();
    this.handleClickHamburger = this.handleClickHamburger.bind(this);
    this.handleClickPencil = this.handleClickPencil.bind(this);
    this.handleClickMarmoymLogo = this.handleClickMarmoymLogo.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClickLeftArrow = this.handleClickLeftArrow.bind(this);
    this.state = {
      displayName: '',
      modalIsVisible: false,
      query: '',
    };
  }

  handleClickMarmoymLogo() {
    this.props.history.push('/');
  }

  handleClickPencil() {
    this.props.history.push('/define');
  }

  handleClickSearch() {
    this.setState((state, props) => {
      return {
        ...state,
        displayName: 'SEARCH',
      };
    });
  }

  handleChangeQuery(e) {
    const query = e.target.value;
    this.setState((state, props) => {
      return {
        ...state,
        query,
      };
    });
  }

  handleKeyDown(e) {
    if (e.keyCode === KeyCode.RETURN) {
      this.setState((state, props) => {
        return {
          displayName: '',
          query: '',
        };
      });
      this.props.history.push(`/search?q=${this.state.query}`);
    }
  }

  handleClickLeftArrow() {
    this.setState((state, props) => {
      return {
        ...state,
        displayName: '',
      };
    });
  }

  handleClickHamburger(e) {
    this.setState((state, props) => {
      return {
        modalIsVisible: true,
      };
    });
  }

  render() {
    return (
      <DefaultMasthead
        query={this.state.query}
        handleChangeQuery={this.handleChangeQuery}
        handleClickLeftArrow={this.handleClickLeftArrow}
        handleKeyDown={this.handleKeyDown}
        searchRequested={this.props.searchRequested}
        modalIsVisible={this.state.modalIsVisible}
        handleClickSearch={this.handleClickSearch}
        handleClickMarmoymLogo={this.handleClickMarmoymLogo}
        handleClickPencil={this.handleClickPencil}
        handleClickHamburger={this.handleClickHamburger}
        handleClickBackdrop={this.handleClickBackdrop}/>
    );
  }
}

DefaultMastheadContainer.propTypes = {
  componentId: PropTypes.string.isRequired,
};

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
    };
  };
};

export default compose(
  withRouter,
  withUuid,
  connect(makeMapStateToProps),
)(DefaultMastheadContainer);
