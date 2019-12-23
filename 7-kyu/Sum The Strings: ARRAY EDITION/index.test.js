const sumArr = require('.')

test('Test 1', () => {
  expect(sumArr(['4', '5', '6', '7', '8'], ['1', '2', '3', '4', '5'])).toEqual(['5', '7', '9', '11', '13'])
})

test('Test 2', () => {
  expect(sumArr(['34', '5', '200', '17', '6'], ['27', '24', '14', '90', '16'])).toEqual([
    '61',
    '29',
    '214',
    '107',
    '22',
  ])
})