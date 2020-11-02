class Group {
  constructor() {
    this.members = []
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value)
    }
  }

  delete(value) {
    const valueIndex = this.members.indexOf(value)
    const lastItem = this.members.pop()
    this.members[valueIndex] = lastItem
  }

  has(value) {
    return this.members.includes(value)
  }

  static from(collection) {
    const group = new Group()
    for (const member of collection) {
      group.members.push(member)
    }
    return group
  }
}

let group = Group.from([10, 20])
console.log(group.has(10))
// → true
console.log(group.has(30))
// → false
group.add(10)
group.delete(10)
console.log(group.has(10))
// → false
