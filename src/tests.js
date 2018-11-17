class Request {
  constructor(req, res, next) {
    ;(this.resquest = req), (this.response = res), (this.next = next)
  }
}

const test = (req, res, next) => {
  console.log({ req })
  console.log({ res })
  console.log({ next })

  res(() => {
    "ive called"
  })
}

let myClass = new Request(test)
