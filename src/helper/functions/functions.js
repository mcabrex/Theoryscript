//TODO: Possibly create a system based off of scales? 

let nextSemitones = (note,numOfSemitones) => {
  //gives the next note up on the scale based on the number of semitones(half steps) you give it
    let scale = ['C','D','E','F','G','A','B','C']
    let nextNote = scale[(scale.indexOf(note[0])+1)]
    let accidental = note[1] ? note.slice(1,note.length) : null
    
    let upperDistance = note[0] === "B" || note[0] === "E" ? 0.5 : 1
    //the distance between B && E to the next note on the scale are the only ones who need only a single semitone 
    let lowerDistance = accidental ? accidental.length*0.5 : 0
    //if there's an accidental the distance between the note will have to be increased or decreased depending on the accidental
    if(accidental && accidental[0] === '♯') lowerDistance*=-1
    //if there's an accidental and it's sharp then the distance between the current note and the next ntoe on the scale will have to be decreased by the amount of accidentals
    let totalDistance = upperDistance + lowerDistance - (0.5*numOfSemitones)
    //the total number of semitones between the current note and the next note up the scale (based on C major)
    
    if(totalDistance === 0) return nextNote
    //always give the next note up the scale

    let accidentalType = totalDistance > 0 ? '♭' : '♯'
    //the total distance will determine if the next note should be sharp or flat
    let newAccidental = ''
    
    for(let i = 0; i < Math.abs(totalDistance); i+=0.5){
        newAccidental+=accidentalType
    }  

    return nextNote+=newAccidental
    //return the next note with the appropriate accidentals
    
    //=============== TODO =====================
    //  - Account for double sharps as x?
}

let scaleMaker = (mode,key) => {
  //create scales based off of given mode and key
    let modes = {
        'Ionian' : [3,7],
        'Dorian' : [2,6],
        'Phrygian' : [1,5],
        'Lydian' : [4,7],
        'Mixolydian' : [3,6],
        'Aeolian' : [2,5],
        'Locrian' : [1,4]
    }
    //array contains information on the only times to use a half step instaed of a whole step
    let scale = []
    scale.push(key)
    //scale starts with the key
    for(let i = 1; i < 8; i++){
      let baseNote = scale[i-1]
      //start at 1 since we pushed the key in already, just a little easier to visualize for me
        if(i === modes[mode][0] || i === modes[mode][1]) scale.push(nextSemitones(baseNote,1))
            //if i is at the point in the scale where you need a half step, only go up by one semitone
         else scale.push(nextSemitones(baseNote,2))
            //otherwise go up by a whole step
        
    }
    return scale

    // =============== TODO =====================
    //  - not satisfied with system to identify when to place half steps, perhaps a more algorithmic approach?
}

let intervalCalculator = (note,interval) => {
  //gives the next note up given the interval and base note
  let intervalSetA = ['d','m','M','A']
  let intervalSetB = ['d','P','A']
  //
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

let triadMaker = (root,quality) => {
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

let triadCalculator = (chord) => {
    let root = chord[0]
    const types = [
        'Major',
        'Minor',
        'Diminished',
        'Augmented'
    ]
    for(let i = 0; i < types.length; i++){
      let chordType = types[i]
      if(triadMaker(root,chordType).toString() === chord.toString()) return chordType
    }
    return 'Unkown Chord'
}


let scaleChords = (scale) => {
    let chords = []
    let newScale = scale.slice(0,scale.length-1)
    for(let i = 0; i < 7; i++){
      chords.push([
        newScale[i],
        newScale[(i+2)%newScale.length],
        newScale[(i+4)%newScale.length]
      ])
    }
    chords.push(chords[0])
    return chords
}

//roman numeral analysis 
let romanNumeralAnalysis = (chordArr,key) => {
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

export {
  scaleMaker,
  intervalCalculator,
  triadMaker,
  triadCalculator,
  scaleChords,
  romanNumeralAnalysis,
  nextSemitones
}