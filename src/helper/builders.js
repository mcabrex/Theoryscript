import React from 'react'

import {
    nextSemitones,
} from './functions'

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
