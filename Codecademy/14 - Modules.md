# Hello Modules
JavaScript modules are reusable pieces of code that can be exported from one program and imported for use in another program.

Modules are particularly useful for a number of reasons. By separating code with similar logic into files called modules, we can:
- find, fix, and debug code more easily;
- reuse and recycle defined logic in different parts of our application;
- keep information private and protected from other modules;
- and, importantly, prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.

In this lesson, we’ll cover two ways to implement modules in JavaScript: Node.js’s `module.exports` and `require()` syntax, as well as the ES6 `import`/`export` syntax.

# module.exports
We can get started with modules by defining a module in one file and making the module available for use in another file with Node.js module.exports syntax. Every JavaScript file run in Node has a local module object with an exports property used to define what should be exported from the file.

Below is an example of how to define a module and how to export it using the statement module.exports.

In menu.js we write:
```js
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";
 
module.exports = Menu; 
```

Let’s consider what this code means.
- `let Menu = {};` creates the object that represents the module Menu. The statement contains an uppercase variable named Menu which is set equal to an empty object.
- `Menu.specialty` is defined as a property of the Menu module. We add data to the Menu object by setting properties on that object and giving the properties a value.
- `"Roasted Beet Burger with Mint Sauce";` is the value stored in the `Menu.specialty` property.
- `module.exports = Menu;` exports the Menu object as a module. module is a variable that represents the module, and `exports` exposes the module as an object.

The pattern we use to export modules is thus:
1. Create an object to represent the module.
2. Add properties or methods to the module object.
3. Export the module with module.exports.

Let’s create our first module.

**Instructions**
1. Let’s begin by implementing the pattern above in an example. In 1-airplane.js create an object named Airplane.

2. Within the same file, add a property to the Airplane object named myAirplane and set it equal to "StarJet".

3. Export the module.

**Answer**
```js
let Airplane = {};
Airplane.myAirplane = "StarJet";

module.exports = Airplane;
```

# require()
To make use of the exported module and the behavior we define within it, we import the module into another file. In Node.js, use the require() function to import modules.

For instance, say we want the module to control the menu’s data and behavior, and we want a separate file to handle placing an order. We would create a separate file order.js and import the Menu module from menu.js to order.js using require(). require() takes a file path argument pointing to the original module file.

In order.js we would write:
```js
const Menu = require('./menu.js');
 
function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}
 
placeOrder();
```
We now have the entire behavior of Menu available in order.js. Here, we notice:
1. In order.js we import the module by creating a const variable called Menu and setting it equal to the value of the require() function. We can set the name of this variable to anything we like, such as menuItems.
2. require() is a JavaScript function that loads a module. It’s argument is the file path of the module: ./menu.js. With require(), the .js extension is optional and will be assumed if it is not included.
3. The placeOrder() function then uses the Menu module. By calling Menu.specialty, we access the property specialty defined in the Menu module.

Taking a closer look, the pattern to import a module is:
1. Import the module with require() and assign it to a local variable.
2. Use the module and its properties within a program.

**Instructions**
1. In 1-missionControl.js use the require() function to import the Airplane module from 1-airplane.js.

Recall that you will need to use the precise name of the file that contains the module.

2. In 1-missionControl.js, define a function displayAirplane(). In the function, log the value of the module and its property to the console.

3. Call the displayAirplane() function. In the console, you should see the name of the airplane you defined in the module.

**Answer**
```js
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane(); // StarJet
```

# module.exports II
We can also wrap any collection of data and functions in an object, and export the object using module.exports. In menu.js, we could write:
```js
module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
}; 
```

In the above code, notice:
1. `module.exports` exposes the current module as an object.
2. `specialty` and `getSpecialty` are properties on the object.

Then in order.js, we write:
```js
const Menu = require('./menu.js');
 
console.log(Menu.getSpecialty());
```

Here we can still access the behavior in the Menu module.

**Instructions**
1. In 2-airplane.js, set module.exports equal to an empty object.

2. Within the object, create a key called myAirplane and set it to a value "CloudJet".

3. Again, within module.exports, create another key displayAirplane and set it to an anonymous function. The function should use the this statement to return myAirplane.

4. In 2-missionControl.js use the require() function to import the Airplane module.

5. In 2-missionControl.js log the result of calling .displayAirplane() to the console, noting that it is a method of the Airplane object.

**Answer**
- 2-airplane.js

```js
module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

// module.exports = {
//   myAirplane: "CloudJet",
//   displayAirplane() {
//     return this.myAirplane;
//   }
// };
```

- 2-missionControl.js
```js
const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane()); // CloudJet
```

# export default
Node.js supports require()/module.exports, but as of ES6, JavaScript supports a new more readable and flexible syntax for exporting modules. These are usually broken down into one of two techniques, default export and named exports.

We’ll begin with the first syntax, default export. The default export syntax works similarly to the module.exports syntax, allowing us to export one module per file.

Let’s look at an example in menu.js.
```js
let Menu = {};
 
export default Menu;
```
1. `export default` uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.
2. Menu refers to the name of the Menu object, the object that we are setting the properties on within our modules.

When using ES6 syntax, we use export default in place of module.exports. Node.js doesn’t support export default by default, so module.exports is usually used for Node.js development and ES6 syntax is used for front-end development. As with most ES6 features, it is common to transpile code since ES6 is not supported by all browsers.

**Instructions**
1. In airplane.js, let’s again create an Airplane module from scratch, this time exporting the module with export default. Create an object to represent the module called Airplane.

2. Now that we have an object Airplane, we can continue by adding data in the form of properties and values to the Airplane module.

Create an availableAirplanes variable and set it equal to an empty array. Be sure that availableAirplanes is a property of the Airplane object.

3. In the availableAirplanes array, add two array elements that are both of type object.

The first object should contain a property name with a value 'AeroJet' and a property fuelCapacity with a value of 800.

The second object should have a property name with a value of SkyJet and a property fuelCapacity with a value of 500.

4. Use export default to export the Airplane module.

Nice work! We added a property that lists the availableAirplanes to the Airplane module.

**Answer**
```js
let Airplane = {
  availableAirplanes: [
    {
      name: "AeroJet",
      fuelCapacity: 800
    },
    {
      name: "SkyJet",
      fuelCapacity: 500
    }
  ]
};

export default Airplane;
```

# import
ES6 module syntax also introduces the import keyword for importing objects. In our order.js example, we import an object like this:
```js
import Menu from './menu';
```

1. The `import` keyword begins the statement.
2. The keyword `Menu` here specifies the name of the variable to store the default export in.
3. `from` specifies where to load the module from.
4. `'./menu'` is the name of the module to load. When dealing with local files, it specifically refers to the name of the file without the extension of the file.
We can then continue using the Menu module in the order.js file.

**Instructions**
1. In missionControl.js we’ll use the module Airplane to display the fuel capacity of both our airplanes.

Use the import keyword to import the Airplane module.

2. Define a function displayFuelCapacity().

3. Within the body of the displayFuelCapacity function, use forEach() to iterate over the Airplane.availableAirplanes array.

The forEach() should take an anonymous function as a parameter. We’ll add more in the next step.

**Hint**
```js
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(){});
}
```

4. Pass the anonymous function you created in the last step a parameter of element.

5. Within the displayFuelCapacity function, use console.log() to output the element’s name and its fuel capacity. The output should look like this:

```js
'Fuel Capacity of + (element name) : + (element fuelCapacity)'
```

6. Call the displayFuelCapacity function.

**Answer**
```js
import Airplane from './airplane'

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  })
}

displayFuelCapacity();

// function displayFuelCapacity() {
//   Airplane.availableAirplanes.forEach(element => {
//     console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
//   })
// }

// displayFuelCapacity();
```

**Result**
```
Fuel Capacity of AeroJet: 800
Fuel Capacity of SkyJet: 500
```





