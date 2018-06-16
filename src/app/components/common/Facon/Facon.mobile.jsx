import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { border } from '@styles/styles';
import Color from '@constants/Color';

const Icon = (props) => {
  const className = props.className ? ` ${className}` : '';

  return (
    <i
      {...props}
      area-hidden="true"
      className={`fa fa-${props.label}${className}`}/>
  );
}

const Facon = ({
  repeat,
  ...restProps,
}) => {
  if (repeat) {
    return [...Array(repeat)].map((_, idx) => {
      return (
        <Icon
          {...restProps}
          key={idx}/>
      );
    });
  }
  return (
    <Icon {...restProps}/>
  );
}

Facon.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  repeat: PropTypes.number,
};

export default Facon;
