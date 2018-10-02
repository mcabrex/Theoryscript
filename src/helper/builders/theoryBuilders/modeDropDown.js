import React from 'react'

export default function modeDropDown(modes) {
    let div = [];
    for (let i = 0; i < modes.length; i++) {
      let mode = modes[i];
      if (mode === "Ionian") {
        div.push(
          <option mode={`mode${mode}`} key={mode} id={i} name="mode" selected>
            {mode}
          </option>
        );
      } else {
        div.push(
          <option mode={`mode${mode}`} key={mode} id={i} name="mode">
            {mode}
          </option>
        );
      }
    }
    return div;
  }
  