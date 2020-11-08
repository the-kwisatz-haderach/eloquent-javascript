class PGroup {
  members = []

  constructor(members = []) {
    this.members = members
  }

  static get empty() {
    return new PGroup()
  }

  add(value) {
    if (!this.has(value)) {
      return new PGroup([...this.members, value])
    }
    return this
  }

  delete(value) {
    return new PGroup(this.members.filter((m) => m !== value))
  }

  has(value) {
    return this.members.includes(value)
  }
}

let a = PGroup.empty.add('a')
let ab = a.add('b')
let b = ab.delete('a')

console.log(b.has('b'))
// → true
console.log(a.has('b'))
// → false
console.log(b.has('a'))
// → false
