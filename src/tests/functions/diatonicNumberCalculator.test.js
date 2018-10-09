import {diatonicNumberCalculator} from '../../helper/functions'

test("diatonicNumberCalculator - no Accidentals, Unison", () => {
  const currentResult = diatonicNumberCalculator('C','C')
  expect(currentResult).toBe(1)
});

test("diatonicNumberCalculator - with Accidentals, Unison", () => {
  const currentResult = diatonicNumberCalculator('D♯','D♭')
  expect(currentResult).toBe(1)
});

test("diatonicNumberCalculator - no Accidentals, Third", () => {
  const currentResult = diatonicNumberCalculator('E','G')
  expect(currentResult).toBe(3)
});

test("diatonicNumberCalculator - with Accidentals, Third", () => {
  const currentResult = diatonicNumberCalculator('F♭','A♯♯')
  expect(currentResult).toBe(3)
});

test("diatonicNumberCalculator - no Accidentals, Fifth", () => {
  const currentResult = diatonicNumberCalculator('G','D')
  expect(currentResult).toBe(5)
});

test("diatonicNumberCalculator - with Accidentals, Fifth", () => {
  const currentResult = diatonicNumberCalculator('A♭♯','E♯♯♯')
  expect(currentResult).toBe(5)
});

test("diatonicNumberCalculator - no Accidentals, Seventh", () => {
  const currentResult = diatonicNumberCalculator('B','A')
  expect(currentResult).toBe(7)
});

test("diatonicNumberCalculator - with Accidentals, Seventh", () => {
  const currentResult = diatonicNumberCalculator('C♯','B♭♭♭♯')
  expect(currentResult).toBe(7)
});

