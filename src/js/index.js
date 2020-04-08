import '@babel/polyfill'
import React from 'react';
import { render } from 'react-dom'

import './index.scss';

function App() {
  return (
    <div class="app">
      <p class="header">My App</p>
    </div>
  );
}

render(<App />, document.getElementById('root'))
