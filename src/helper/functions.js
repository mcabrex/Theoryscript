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

export function intervalCalculator(note,interval){
  let intervalSetA = ['d','m','M','A']
  let intervalSetB = ['d','P','A']
  let perfectIntervals = [4,5,8]
  let semitones = perfectIntervals.includes(+interval[1]) ? intervalSetB.indexOf(interval[0]) : intervalSetA.indexOf(interval[0])
  let nextNote = note

  for(let i = 0; i < +interval[1]-1; i++){
    if(i === +interval[1]-2){
      return +interval[1] === 5 ? nextSemitones(nextNote,semitones+1) : nextSemitones(nextNote,semitones)
    }
    nextNote = i === 2 || i === 6 ? nextSemitones(nextNote,1) : nextSemitones(nextNote,2)
  }
}

export function triadMaker(root,quality){
  let qualities = {
    'Diminished': ['m','d'],
    'Minor': ['m','P'],
    'Major': ['M','P'],
    'Augmented' : ['M','A']
  }
  let chord = []
  let third = intervalCalculator(root,qualities[quality][0]+3)
  let fifth = intervalCalculator(root,qualities[quality][1]+5)
  chord.push(root,third,fifth)
  return chord
}

export function triadCalculator(chord){
    let root = chord[0]
    const types = [
        'Major',
        'Minor',
        'Diminished',
        'Augmented'
    ]
    for(let i = 0; i < types.length; i++){
      let chordType = types[i]
      console.log(triadMaker(root,chordType),chord)
      if(triadMaker(root,chordType).toString() === chord.toString()) return chordType
    }
    return 'Unkown Chord'
}


export function scaleChords(scale){
    let chords = []
    for(let i = 0; i < scale.length; i++){
      chords.push([
        scale[i],
        scale[(i+2)%scale.length],
        scale[(i+4)%scale.length]
      ])
    }
    chords.push(chords[0])
    return chords
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

    let type = triadCalculator(chordArr)
    
    switch(type){
      case 'Major':
        return romanNumeral.toUpperCase()
      case 'Minor':
        return romanNumeral.toLowerCase()
      case 'Diminished':
        romanNumeral=romanNumeral.toLowerCase()
        return romanNumeral +=`\xB0`
      case 'Augmented':
        romanNumeral=romanNumeral.toUpperCase()
        return romanNumeral +='+'
      default :
        return 'Unknown chord or key'
    }
}