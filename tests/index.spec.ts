import Fuzzy from '../lib'

test('Grade: value=10, min=20, max=30, result: 0', () => {
  expect(Fuzzy.grade(10, 20, 30)).toBe(0)
})

test('Grade: value=25, min=20, max=30, result: 0.5', () => {
  expect(Fuzzy.grade(25, 20, 30)).toBe(0.5)
})

test('Grade: value=35, min=20, max=30, result: 1', () => {
  expect(Fuzzy.grade(35, 20, 30)).toBe(1)
})

test('Grade(reverse): value=10, min=20, max=30, result: 1', () => {
  expect(Fuzzy.grade(10, 20, 30, true)).toBe(1)
})

test('Grade(reverse): value=25, min=20, max=30, result: 0.5', () => {
  expect(Fuzzy.grade(25, 20, 30, true)).toBe(0.5)
})

test('Grade(reverse): value=35, min=20, max=30, result: 0', () => {
  expect(Fuzzy.grade(35, 20, 30, true)).toBe(0)
})

test('Triangle: value=5, min=10, vertex=20, max=30, result: 0', () => {
  expect(Fuzzy.triangle(5, 10, 20, 30)).toBe(0)
})

test('Triangle: value=15, min=10, vertex=20, max=30, result: 0.5', () => {
  expect(Fuzzy.triangle(15, 10, 20, 30)).toBe(0.5)
})

test('Triangle: value=20, min=10, vertex=20, max=30, result: 1', () => {
  expect(Fuzzy.triangle(20, 10, 20, 30)).toBe(1)
})

test('Triangle: value=25, min=10, vertex=20, max=30, result: 0.5', () => {
  expect(Fuzzy.triangle(25, 10, 20, 30)).toBe(0.5)
})

test('Triangle: value=35, min=10, vertex=20, max=30, result: 0', () => {
  expect(Fuzzy.triangle(35, 10, 20, 30)).toBe(0)
})

test('Trapezoid: value=5, min=10, vertexStart=20, vertexEnd=30, max=40, result: 0', () => {
  expect(Fuzzy.trapezoid(5, 10, 20, 30, 40)).toBe(0)
})

test('Trapezoid: value=15, min=10, vertexStart=20, vertexEnd=30, max=40, result: 0.5', () => {
  expect(Fuzzy.trapezoid(15, 10, 20, 30, 40)).toBe(0.5)
})

test('Trapezoid: value=25, min=10, vertexStart=20, vertexEnd=30, max=40, result: 1', () => {
  expect(Fuzzy.trapezoid(25, 10, 20, 30, 40)).toBe(1)
})

test('Trapezoid: value=28, min=10, vertexStart=20, vertexEnd=30, max=40, result: 1', () => {
  expect(Fuzzy.trapezoid(28, 10, 20, 30, 40)).toBe(1)
})

test('Trapezoid: value=35, min=10, vertexStart=20, vertexEnd=30, max=40, result: 0.5', () => {
  expect(Fuzzy.trapezoid(35, 10, 20, 30, 40)).toBe(0.5)
})

test('Trapezoid: value=45, min=10, vertexStart=20, vertexEnd=30, max=40, result: 0', () => {
  expect(Fuzzy.trapezoid(45, 10, 20, 30, 40)).toBe(0)
})
