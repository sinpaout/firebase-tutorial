import '@babel/polyfill'
import React from 'react';
import { render } from 'react-dom'

function App() {
  return (
    <div>
      <p>My App</p>
    </div>
  );
}

render(<App />, document.getElementById('root'))
