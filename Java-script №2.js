console.log(".Reducer")
const arrey1 = [1, 2, 3, 4, 5, 6, 7, 8]

const result1 = arrey1.reduce((el1, el2)=> {
  return el1 + el2
}, 0)// ноль это значение, в которое будет el2
console.log(result1)
const arrey2 = [
  { id: '123', name: 'John' },
  { id: '345', name: 'Anna' },
  { id: '567', name: 'Kate' },
  { id: '789', name: 'Jane' }
]
const result2 =