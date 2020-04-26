import React from 'react';
import styled from 'styled-components'

import css from './button.scss';

function Button(props) {
  return (
    <StyledButton disabled={false}>
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 8px;
  border-radius: 4px;
  background-color: #ff3355;
  color: #fff;
  font-weight: bold;

  opacity: ${(props) => {
    return props.disabled ? '0.5' : '1';
  }};
`;

export default Button
