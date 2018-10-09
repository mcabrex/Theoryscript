import {semitonalDistance} from'../../helper/functions'

test("semitonalDistance - no Accidentals, Octave", () => {
  const currentResult = semitonalDistance('C','C')
  expect(currentResult).toBe(6)
});

test("semitonalDistance - with Accidentals, Octavee", () => {
  const currentResult = semitonalDistance('D♯','D♭')
  expect(currentResult).toBe(5)
});

test("semitonalDistance - no Accidentals, Third", () => {
  const currentResult = semitonalDistance('E','G')
  expect(currentResult).toBe(1.5)
});

test("semitonalDistance - with Accidentals, Third", () => {
  const currentResult = semitonalDistance('F♭','A♯♯')
  expect(currentResult).toBe(3.5)
});

test("semitonalDistance - no Accidentals, Fifth", () => {
  const currentResult = semitonalDistance('G','D')
  expect(currentResult).toBe(3.5)
});

test("semitonalDistance - with Accidentals, Fifth", () => {
  const currentResult = semitonalDistance('A♭♯','E♯♯♯')
  expect(currentResult).toBe(5)
});

test("semitonalDistance - no Accidentals, Seventh", () => {
  const currentResult = semitonalDistance('B','A')
  expect(currentResult).toBe(5)
});

test("semitonalDistance - with Accidentals, Seventh", () => {
  const currentResult = semitonalDistance('C♯','B♭♭♭♯')
  expect(currentResult).toBe(7)
});

