import '@babel/polyfill'
import React from 'react';
import { render } from 'react-dom'

import data from '../../assets/data.yml'

import './index.scss';

function App() {

  const Items = data.list.map((item, index) => {
    return <li key={index}>{item}</li>
  })

  return (
    <div class="app">
      <p class="header">My App</p>
      <ul>
        {Items}
      </ul>
    </div>
  );
}

render(<App />, document.getElementById('root'))
