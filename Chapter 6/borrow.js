const compromisedObject = {
  hasOwnProperty: 'X',
  someProperty: false,
}

console.log(
  Object.prototype.hasOwnProperty.call(compromisedObject, 'someProperty')
)
// -> true
