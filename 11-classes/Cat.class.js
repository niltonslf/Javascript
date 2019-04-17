import user from "./Animal.class.js"

class Cat extends Animal {
  constructor(name, sound) {
    super(name)
    this.sound = sound
  }

  meow() {
    console.log(`${this.sound}!! I'm ${this.name}`)
  }
}
