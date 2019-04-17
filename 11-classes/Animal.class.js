class Animal {
  constructor(name) {
    this.name = name
  }

  // shorthand for helo: function(){...}
  hello() {
    console.log(`${this.sound}! I'm a ${this.kind}`)
  }
}

export default Animal
