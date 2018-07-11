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

