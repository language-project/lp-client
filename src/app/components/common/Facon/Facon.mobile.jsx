import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { border } from '@styles/styles';
import Color from '@constants/Color';

const Icon = ({
  className,
  label,
  ...restProps,
}) => {
  const _className = className ? ` ${className}` : '';

  return (
    <i
      {...restProps}
      area-hidden="true"
      className={`fa fa-${label}${_className}`}/>
  );
};

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
