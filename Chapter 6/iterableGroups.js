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

  [Symbol.iterator]() {
    return {
      members: this.members,
      index: 0,
      next() {
        if (this.index === this.members.length) {
          return { done: true }
        }
        const value = this.members[this.index]
        this.index++
        return {
          value,
          done: false,
        }
      },
    }
  }
}

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value)
}
