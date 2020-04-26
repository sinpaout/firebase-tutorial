import React from 'react';

import css from './button.scss';

function Button(props) {
  return (
    <button class={`button ${css.class}`} disabled={false}>
      {props.children}
    </button>
  );
}

export default Button
