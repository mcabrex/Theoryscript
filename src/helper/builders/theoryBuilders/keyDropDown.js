import React from 'react'

export default function keyDropDown(keys) {
    let div = [];
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      div.push(
        <button
          key={`key${key}`}
          id={key}
          name="key"
          type="button"
          className="btn btn-secondary"
        >
          {key}
        </button>
      );
    }
    return div;
  }