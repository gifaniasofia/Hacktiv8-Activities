# Introduction
In Understanding Prototypes and Inheritance in JavaScript, we learned how JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called [[Prototype]] that can be used to extend object properties and methods.

Until recently, industrious developers used constructor functions to mimic an object-oriented design pattern in JavaScript. The language specification ECMAScript 2015, often referred to as ES6, introduced classes to the JavaScript language. Classes are often described as "syntactic sugar" over prototypes and inheritance, which means they offer a cleaner and easier syntax without offering new functionality.

# Defining a Class
In the prototypes and inheritance tutorial, we created an example based around character creation in a text-based role-playing game. Let's continue with that example here to update the syntax from functions to classes.

Originally, a constructor function would be initialized with a number of parameters, which would be assigned as properties of this, referring to the function itself. The first letter of the identifier would be capitalized by convention.
```js
// Initializing a constructor function
function Hero(name, level) {
  this.name = name
  this.level = level
}
```

The new class syntax, shown below, is structured very similarly.

```js
// Initializing a class definition
class Hero {
  constructor(name, level) {
    this.name = name
    this.level = level
  }
}
```

We know a constructor function is meant to be an object blueprint by the capitalization of the first letter of the initializer (which is optional) and through familiarity with the syntax. The class keyword communicates in a more straightforward fashion the objective of our function.

The only difference in the syntax of the initialization is using the class keyword instead of function, and assigning the properties inside a constructor() method.

# Defining Methods
The common practice with constructor functions is to assign methods directly to the prototype, instead of in the initialization, as seen in the greet() method below.

```js
function Hero(name, level) {
  this.name = name
  this.level = level
}

// Adding a method to the constructor
Hero.prototype.greet = function () {
  return `${this.name} says hello.`
}
```

With classes this syntax is simplified, and the method can be added directly to the class. Using the method definiton shorthand introduced in ES6, defining a method is an even more concise process.

```js
class Hero {
  constructor(name, level) {
    this.name = name
    this.level = level
  }

  // Adding a method to the constructor
  greet() {
    return `${this.name} says hello.`
  }
}
```

Let's take a look at these properties and methods in action. We will create a new instance of Hero using the new keyword, and assign some values.
```js
const hero1 = new Hero('Varg', 1)
```

If we print out more information about our new object with console.log(hero1), we can see more details about what is happening with the class initialization.
```
Hero {name: "Varg", level: 1}
__proto__:
  ▶ constructor: class Hero
  ▶ greet: ƒ greet()
```
