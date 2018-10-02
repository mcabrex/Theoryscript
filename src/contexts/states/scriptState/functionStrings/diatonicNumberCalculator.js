let diatonicNumberCalculator = `function diatonicNumberCalculator(note1,note2){
  let scale = ["C", "D", "E", "F", "G", "A", "B"]
  let interval = 0
  let note1Index = scale.indexOf(note1[0])
  let note2Index = scale.indexOf(note2[0])

  for(let i = note1Index; i <= scale.length + note2Index; i++){
    let currentNote = scale[i % scale.length]
    interval++
    if(currentNote === note2[0]) return interval
  }
}`

export default diatonicNumberCalculator 