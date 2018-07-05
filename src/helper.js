import React from 'react'

export function scaleBuilder(scale){
    let div = []
    for(let i = 0; i < scale.length; i++){
        let note = scale[i]
            div.push(
                <div 
                    key={`scale${note+i}`} 
                    id={i}
                    className="scales-note"
                >
                    {note}    
                </div>
            )
    }
    return div
}

export function keyDropDown(keys){
    let div = []
    for(let i  = 0; i < keys.length; i++){
        let key = keys[i]
        div.push(
            <button key={`key${key}`} id={key} name="key" type="button" className="btn btn-secondary">
                {key}
            </button>
        )
    }
    return div
}

export function modeDropDown(modes){
    let div = []
    for(let i  = 0; i < modes.length; i++){
        let mode = modes[i]
        if(mode === 'Ionian'){
            div.push(
                <option mode={`mode${mode}`} key={mode} id={i} name="mode" selected>
                    {mode}
                </option>
            )
        } else {
            div.push(
                <option mode={`mode${mode}`} key={mode} id={i} name="mode">
                    {mode}
                </option>
            )
        }

    }
    return div
}

export function nextSemitones(note,numOfSemitones){
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

export function majorThird(note){
    return nextSemitones(nextSemitones(note,2),2)
}
  
export function minorThird(note){
      return nextSemitones(nextSemitones(note,2),1)
}

export function perfectFifth(note){
    return minorThird(majorThird(note))
}

export function majorTriadChord(note){
    let chord = []
    let third = majorThird(note)
    let fifth = perfectFifth(note)
    chord.push(note,third,fifth)
    return chord
}

export function scaleMaker(mode,key){
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
        if(i === modes[mode][0] || i === modes[mode][1]){
            scale.push(nextSemitones(scale[i-1],1))
        } else {
            scale.push(nextSemitones(scale[i-1],2))
        }
    }
    return scale
}
