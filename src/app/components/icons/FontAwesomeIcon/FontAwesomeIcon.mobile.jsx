import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

export default (props) => {
  const { className, icon, ...rest } = props;
  const _className = `${className ? className : ''} fa fa-${icon}`;
  return (
    <i
      {...rest}
      className={_className}
      aria-hidden="true"/>
  );
};
