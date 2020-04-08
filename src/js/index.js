import '@babel/polyfill'
import React from 'react';
import { render } from 'react-dom'

import './index.css';

function App() {
  return (
    <div class="app">
      <p>My App</p>
    </div>
  );
}

render(<App />, document.getElementById('root'))
