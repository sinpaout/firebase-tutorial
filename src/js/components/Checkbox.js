import React from 'react';

import css from './checkbox.scss';

function Checkbox(props) {
  return (
    <label class={`button ${css.class}`}>
      <input type="checkbox" disabled={false} />
      <span className="checkbox-text">
        {props.children}
      </span>
    </label>
  );
}

export default Checkbox
