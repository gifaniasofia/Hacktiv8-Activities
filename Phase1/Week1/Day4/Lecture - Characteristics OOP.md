# Abstraction
- specifying what to do but not how to do it
- kita sebagai user cuma tau cara pakai, tidak memusingkan detailnya: bisa mencet sesuatu untuk ngapain misal telp
- contoh konsep lain : remote tv
```js
// Abstraction example : instance method (buy and sell)

class Car {
  constructor() {
  
  }

  buy() {

  }

  sell() {

  }

}
```
# Encapsulation
- hiding the internals or implementation details of the class from the user

```js
// Example : getter and setter

class Car {
  constructor(model, price) {
    // dunia dalam - private
    this._model = model // private (_)
    this._price = price
  }

  get Price() { // penghubung dunia dalam dan luar
    return this._price // return private property
  }
}

// dunia luar
var c = new Car('Tesla', 20000)
console.log(c.price)
```

# get - set
bayangannya :
```js
var n = 10
console.log(n) // get - 10

n = 20
console.log(n) // set - 20
```

```js
class Person {
  constructor(value) {
    this._name = value
  }
  
  get name () {
    return this._name
  }
  
  set name (value) {
    this._name = value
  }

}

// get
console.log(c.name)

// set
c.name = 'Doe'

// get
console.log(c.name) // 'Doe'
```

# Inheritance
- parent and child
```js
class Car {
  constructor(model, price) {
  
  }
  
  get price() {
    return this._price
  }
  
  brush(color) {
    console.log(`${this._model} color is ${color}`)
  }
}

// yang diturunkan adalah dari properti dan method yg ada di class parent
class Toyota extends Car {
  constructor(model, price, cc) {
    super (model, price) // wajib manggil
    this._cc = cc
  }
  
  start() {
    console.log (`The ${this._model} engine is started`)
  }
}

var t = new Toyota('Yaris', 2000, 1500)
t.brush('red')
t.start()
```

# Polymorphism
> the process of using same method name by multiple classes and redefiness methods for the derived classes

Teknik:
1. Overriding -> method yg di parent udah ada, tapi ditimpa sama method yg di anak
kalo tetep ada mau ngambil isi si method parent :
```
brush(color) {
  super.brush(color)
  console.log('something else')
}
```
2. Overloading -> di js gabisa
