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


