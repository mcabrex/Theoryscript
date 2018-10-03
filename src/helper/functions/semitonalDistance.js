let semitonalDistance = (note1, note2) => {
  let scale = ["C", "D", "E", "F", "G", "A", "B"];
  let semitones = 0;
  let note1Index = scale.indexOf(note1[0]);
  let note2Index = scale.indexOf(note2[0]);

  let start = note1Index + 1;
  let end = note2Index >= start ? note2Index : note2Index + scale.length;

  for (let i = start; i <= end; i++) {
    let note = scale[i % scale.length];
    //the only notes going up with only a semitone difference
    //ex: B to C and E to F
    if (note === "C" || note === "F") semitones += 0.5;
    //every other note going up is a full tone
    else semitones += 1;
  }

  //the only accidentals to care for are from the two notes given
  //sharps lower the distance on the base note and increased the distance on the top note, opposite for flats
  if (note1[1] === "♯") semitones -= (note1.length - 1) * 0.5;
  else semitones += (note1.length - 1) * 0.5;

  if (note2[1] === "♯") semitones += (note2.length - 1) * 0.5;
  else semitones -= (note2.length - 1) * 0.5;

  return Math.abs(semitones);
};

export { semitonalDistance };
