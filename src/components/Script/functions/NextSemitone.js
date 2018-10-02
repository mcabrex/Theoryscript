import React, { Component } from "react";

export default class NextSemitone extends Component {
  render() {
    return (
      <dl className="">
        <dt className="col-sm-3">Next Semitone</dt>
        <div className="col-sm-9">
          <dd className="text-left">
            Given a note and a number of semitones, return the next immediate note up the scale with a distance equivalent to the semitones given. 
          </dd>
          <pre className="text-left">
            <code>
              {`
function nextSemitones(note,numOfSemitones){
    let scale = ['C','D','E','F','G','A','B','C']
    let nextNote = scale[(scale.indexOf(note[0])+1)]
    let accidental = note[1] ? note.slice(1,note.length) : null
    
    let upperDistance = note[0] === "B" || note[0] === "E" ? 0.5 : 1
    let lowerDistance = accidental ? accidental.length*0.5 : 0
    if(accidental && accidental[0] === '#') lowerDistance*=-1
    let totalDistance = upperDistance + lowerDistance - (0.5*numOfSemitones)
    
    if(totalDistance === 0) return nextNote

    let accidentalType = totalDistance > 0 ? 'b' : '#'
    let newAccidental = ''
    
    for(let i = 0; i < Math.abs(totalDistance); i+=0.5){
        newAccidental+=accidentalType
    }  

    return nextNote+=newAccidental
}
              `}
            </code>
          </pre>
        </div>
      </dl>
    );
  }
}
