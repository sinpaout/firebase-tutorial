import React from 'react';
import styled from 'styled-components'

function Radio(props) {
  return (
    <Label class="radio">
      <input type="Radio" disabled={true} />
      <RadioText disabled={true}>
        {props.children}
      </RadioText>
    </Label>
  );
}

const Label = styled.label`
  appearance: none;
  padding: 8px;
  border: 1px solid #afafaf;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const RadioText = styled.span`
  font-weight: bold;
  opacity: ${(props) => {
    return props.disabled ? '0.5' : '1';
  }};
`;

export default Radio
