let scaleMaker = `
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
}`

export default scaleMaker