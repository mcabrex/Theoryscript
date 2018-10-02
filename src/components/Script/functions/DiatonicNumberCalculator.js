import React, { Component } from 'react';

export default class DiatonicNumberCalculator extends Component {
  render() {
    return (
      <dl className="">
        <dt className="col-sm-3">Diatonic Number Calculator</dt>
        <div className="col-sm-9">
          <dd className="text-left">
            Given two notes, return the diatonic number representative of the interval between them (starting from the first note given).
          </dd>
          <pre className="text-left">
            <code>
              {`
function diatonicNumberCalculator(note1,note2){
  let scale = ["C", "D", "E", "F", "G", "A", "B"]
  let interval = 0
  let note1Index = scale.indexOf(note1[0])
  let note2Index = scale.indexOf(note2[0])

  for(let i = note1Index; i <= scale.length + note2Index; i++){
    let currentNote = scale[i % scale.length]
    interval++
    if(currentNote === note2[0]) return interval
  }
}
              `}
            </code>
          </pre>
        </div>
      </dl>
    );
  }
}
