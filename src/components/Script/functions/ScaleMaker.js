import React, { Component } from 'react';

export default class ScaleMaker extends Component {
  render() {
    return (
      <dl className="">
        <dt className="col-sm-3">Scale Maker</dt>
        <div className="col-sm-9">
          <dd className="text-left">
            Given a mode and a key, return an array of notes representing the modal scale of the given key. 
          </dd>
          <pre className="text-left">
            <code>
              {`
function scaleMaker(mode,key){
  let modes = {
    'Ionian' : [3,7],
    'Dorian' : [2,6],
    'Phrygian' : [1,5],
    'Lydian' : [4,7],
    'Mixolydian' : [3,6],
    'Aeolian' : [2,5],
    'Locrian' : [1,4]
  }
  let scale = []
  scale.push(key)

  for(let i = 1; i < 8; i++){
    let baseNote = scale[i-1]
      if(i === modes[mode][0] || i === modes[mode][1]) scale.push(nextSemitones(baseNote,1))
      else scale.push(nextSemitones(baseNote,2))    
  }

  return scale
}
              `}
            </code>
          </pre>
        </div>
      </dl>
    );
  }
}
