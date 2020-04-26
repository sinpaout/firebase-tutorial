import '@babel/polyfill'
import React from 'react';
import { render } from 'react-dom'
import styled from 'styled-components'

import data from 'data.yml'

import Button from 'js/components/Button'
import ActionButton from 'js/components/ActionButton'
import Checkbox from 'js/components/Checkbox'
import Radio from 'js/components/Radio'

import css from './index.scss';

function App() {

  const Items = data.list.map((item, index) => {
    return <li key={index}>{item}</li>
  })

  return (
    <div class={css.app}>
      <p class="header">My App</p>
      <ul>
        {Items}
      </ul>
      api
      <p>{process.env.API_BASE_URL}</p>
      <div>
        <StyledText>I am styled component</StyledText>
      </div>
      <Checkbox>Disabled</Checkbox>
      <Radio>Radio Disabled</Radio>
      <Button>
        My Button
      </Button>
      <ActionButton>
        My Button
      </ActionButton>
    </div>
  );
}

const StyledText = styled.span`
  color: green;
  font-size: 24px;
  font-weight: bold;
`;

render(<App />, document.getElementById('root'))