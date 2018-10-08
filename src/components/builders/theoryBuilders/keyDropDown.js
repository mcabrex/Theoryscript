import React from "react";

export default function keyDropDown(keys, key, handleKey) {
  let div = [];
  for (let i = 0; i < keys.length; i++) {
    let currentKey = keys[i];
    let keyClass = currentKey === key[0] ? "key-pressed" : "key"
      div.push(
        <button
          onClick={handleKey}
          key={`key${currentKey}`}
          id={currentKey}
          name="key"
          type="button"
          className={keyClass}
        >
          {currentKey}
        </button>
      );
  }
  return div;
}
