import {nextSemitones} from '../../helper/functions'

test("nextSemitones - no Accidentals, 0", () => {
  const currentResult = nextSemitones('C',0)
  expect(currentResult).toBe('D♭♭')
});

test("nextSemitones - with Accidentals, 0", () => {
    const currentResult = nextSemitones('C♯',0)
    expect(currentResult).toBe('D♭')
  });

test("nextSemitones - no Accidentals, 1", () => {
    const currentResult = nextSemitones('D',1)
    expect(currentResult).toBe('E♭')
});

test("nextSemitones - no Accidentals, 2", () => {
    const currentResult = nextSemitones('E',2)
    expect(currentResult).toBe('F♯')
});
  
test("nextSemitones - with Accidentals, 6", () => {
    const currentResult = nextSemitones('F♭',6)
    expect(currentResult).toBe('G♯♯♯')
});

test("nextSemitones - no Accidentals, 11", () => {
    const currentResult = nextSemitones('G',11)
    expect(currentResult).toBe('A♯♯♯♯♯♯♯♯♯')
});

test("nextSemitones - wuth Accidentals, 4", () => {
    const currentResult = nextSemitones('A',4)
    expect(currentResult).toBe('B♯♯')
});
