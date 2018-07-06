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
    let third = majorThird(note)
    let fifth = perfectFifth(note)
    let chord = []
    chord.push(note,third,fifth)
    return chord
}

export function minorTriadChord(note){
    let third = minorThird(note)
    let fifth = perfectFifth(note)
    let chord = []
    chord.push(note,third,fifth)
    return chord
}

export function diminishedTriadChord(note){
    let third = minorThird(note)
    let fifth = minorThird(third)
    let chord = []
    chord.push(note,third,fifth)
    return chord
}

export function augmentedTriadChord(note){
    let third = majorThird(note)
    let fifth = majorThird(third)
    let chord = []
    chord.push(note,third,fifth)
    return chord
}

export function triadType(chord){
    let root = chord[0]
    const types = {
        'Major' : majorTriadChord(root),
        'Minor' : minorTriadChord(root),
        'Diminished' : diminishedTriadChord(root),
        'Augmented' : augmentedTriadChord(root)
    }
    for(triadType in types){
        if(types[triadType].toString() === chord.toString()) return triadType
    }

    return 'Unkown Chord'
}

//roman numeral analysis 
export  function romanNumeralAnalysis(chordArr,key){
    let romanNumerals = ['I','II','III','IV','V','VI','VII','I']
    let scale = ['C','D','E','F','G','A','B']
    let root = chordArr[0]

    let keyPosition = scale.indexOf(key)
    let chordPosition = scale.indexOf(root)
    let numeralIndex = keyPosition <= chordPosition ? chordPosition-keyPosition : (chordPosition+7) - keyPosition
    let romanNumeral = romanNumerals[numeralIndex]

    let type = triadType(chordArr)
    switch(type){
      case 'Major':
        return romanNumeral.toUpperCase()
        break
      case 'Minor':
        return romanNumeral.toLowerCase()
        break  
      case 'Diminished':
        romanNumeral=romanNumeral.toLowerCase()
        return romanNumeral +=`\xB0`
        break
      case 'Augmented':
        romanNumeral=romanNumeral.toUpperCase()
        return romanNumeral +='+'
        break
      default :
        return 'Unknown chord or key'
    }
}