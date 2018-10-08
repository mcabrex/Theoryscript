import React from 'react'

export default function scaleBuilder(scale) {
    let div = [];
    for (let i = 0; i < scale.length; i++) {
      let note = scale[i];
      div.push(
        <div key={`scale${note + i}`} id={i} className="scales-note">
          {note}
        </div>
      );
    }
    return div;
}

