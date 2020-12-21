# Introduction to Classes
JavaScript is an object-oriented programming (OOP) language we can use to model real-world items. In this lesson, you will learn how to make classes. Classes are a tool that developers use to quickly produce similar objects.

Take, for example, an object representing a dog named halley. This dog’s name (a key) is "Halley" (a value) and has an age (another key) of 3 (another value). We create the halley object below:
```js
let halley = {
  _name: 'Halley',
  _behavior: 0,
 
  get name() {
    return this._name;
  },
 
  get behavior() {
    return this._behavior;
  },
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

Now, imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare. Instead of using the syntax above for every dog that joins the daycare, we can create a Dog class that serves as a template for creating new Dog objects. For each new dog, you can provide a value for their name.

As you can see, classes are a great way to reduce duplicate code and debugging time.

After we lay the foundation for classes in the first few exercises, we will introduce inheritance and static methods — two features that will make your code more efficient and meaningful.

**Instructions**
1. In the next exercise, you will learn about classes in greater detail. Before you do, take a moment to study the class in main.js.

Spend some time identifying the similarities and differences between the Dog class in main.js and the code we used to create our halley object in the instructions above.

2. Copy the class instantiation, method call, and console.log() statements below into main.js.
```js
const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
```
What do you expect to see when you run this code?

**Answer**
```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
```
**Result**
```
Halley
0
Halley
1
```

# Constructor
In the last exercise, you created a class called Dog, and used it to produce a Dog object.

Although you may see similarities between class and object syntax, there is one important method that sets them apart. It’s called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.
```js
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```
- Dog is the name of our class. By convention, we capitalize and CamelCase class names.
- JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
- This constructor() method accepts one argument, name.
- Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance’s name property to the name argument.
- Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. The behavior property is always initialized to zero.
In the next exercise, you will learn how to create Dog instances.

**Instructions**
1. Create an empty class named Surgeon.

2. Inside the Surgeon class, create a constructor() method that accepts two parameters: name and department.

3. Inside the Surgeon constructor(), create name and department properties and set them equal to your input parameters.

**Answer**
```js
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
```
# Instance
Now, we’re ready to create class instances. An instance is an object that contains the property names and methods of a class, but with unique property values. Let’s look at our Dog class example.
```js
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}
 
const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
```

Below our Dog class, we use the new keyword to create an instance of our Dog class. Let’s consider the line of code step-by-step.
- We create a new variable named halley that will store an instance of our Dog class.
- We use the new keyword to generate a new instance of the Dog class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
- We pass the 'Halley' string to the Dog constructor, which sets the name property to 'Halley'.
- Finally, we log the value saved to the name key in our halley object, which logs 'Halley' to the console.

Now you know how to create instances. In the next exercise, you will learn how to add getters, setters, and methods.

**Instructions**
1. Create an instance of the Surgeon class — set the name to 'Curry' and department to 'Cardiovascular'.

Save the instance to a constant variable called surgeonCurry.

2. Create an instance of the Surgeon class — set the name to 'Durant' and department to 'Orthopedics'.

Save the instance to a constant variable called surgeonDurant.

**Answer**
```js
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
console.log(surgeonCurry);

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
console.log(surgeonDurant);
```

**Result**
```
Surgeon { name: 'Curry', department: 'Cardiovascular' }
Surgeon { name: 'Durant', department: 'Orthopedics' }
```

# Methods
At this point, we have a Dog class that spins up objects with name and behavior properties. Below, we will add getters and a method to bring our class to life.

Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```
In the example above, we add getter methods for name and behavior. Notice, we also prepended our property names with underscores (`_name` and `_behavior`), which indicate these properties should not be accessed directly. Under the getters, we add a method named `.incrementBehavior()`. When you call `.incrementBehavior()` on a Dog instance, it adds 1 to the `_behavior` property. **Between each of our methods, we did not include commas.**

**Instructions**
1. In the Surgeon constructor, prepend the name and department properties with an underscore (_).
2. Inside of the constructor(), add a property named _remainingVacationDays and set it equal to 20.
3. Under the constructor(), create a getter called name that returns the value saved to _name.
4. Under the name getter, create a getter called department that returns the value saved to _department.
5. Under the department getter, create a getter called remainingVacationDays that returns the value saved to _remainingVacationDays.
6. Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff.

Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.

**Hint**
Class methods are created with the following syntax:
```js
methodOne(keyOne) {
  // Do something here
}
```

**Answer**
```js
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
```

# Method Calls
Finally, let’s use our new methods to access and manipulate data from Dog instances.
```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}
 
const halley = new Dog('Halley');
```
In the example above, we create the Dog class, then create an instance, and save it to a variable named halley.

The syntax for calling methods and getters on an instance is the same as calling them on an object — append the instance with a period, then the property or method name. For methods, you must also include opening and closing parentheses.

Let’s take a moment to create two Dog instances and call our .incrementBehavior() method on one of them.
```js
let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console
```

In the example above, we create two new Dog instances, nikko and bradford. Because we increment the behavior of our nikko instance, but not bradford, accessing nikko.behavior returns 1 and accessing bradford.behavior returns 0.

**Instructions**
1. At the bottom of main.js, use console.log() to print the value saved to thename property of the surgeonCurry object.

2. Call .takeVacationDays() on surgeonCurry, with an input of 3.

3. After the call to .takeVacationDays(), use console.log() to print the value saved to the remainingVacationDays property of the surgeonCurry instance.

**Answer**
```js
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);

console.log(surgeonCurry.remainingVacationDays);
```

# Inheritance I
Imagine our doggy daycare is so successful that we decide to expand the business and open a kitty daycare. Before the daycare opens, we need to create a Cat class so we can quickly generate Cat instances. We know that the properties in our Cat class (name, behavior) are similar to the properties in our Dog class, though, there will be some differences, because of course, cats are not dogs.

Let’s say that our Cat class looks like this:

```js
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  get behavior() {
    return this._behavior;
  }  
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

In the example above, we create a Cat class. It shares a couple of properties (`_name` and `_behavior`) and a method (`.incrementBehavior()`) with the Dog class from earlier exercises. The Cat class also contains one additional property (`_usesLitter`), that holds a boolean value to indicate whether a cat can use their litter box.

When multiple classes share properties or methods, they become candidates for inheritance — a tool developers use to decrease the amount of code they need to write.

With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.

Let’s abstract the shared properties and methods from our Cat and Dog classes into a parent class called Animal.
```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
} 
```
In the example above, the Animal class contains the properties and methods that the Cat and Dog classes share (name, behavior, .incrementBehavior()).

The diagram to the right shows the relationships we want to create between the Animal, Cat, and Dog classes.

![diagram inheritance I] (https://content.codecademy.com/courses/learn-javascript-classes/diagrams/inheritance_diagram.svg)

# Inheritance II
In the last exercise, we created a parent class named Animal for two child classes named Cat and Dog.

The Animal class below contains the shared properties and methods of Cat and Dog.
```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
} 
```
The code below shows the Cat class that will inherit information from the Animal class.
```js
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```
To the right, in main.js, you will put what you learned to practice by creating a parent class named HospitalEmployee.

**Instructions**
Instructions
1. In the next few exercises, you will create two subclasses (Doctor and Nurse) from a parent class named HospitalEmployee. Below, we have listed the properties and methods you will find in the Doctor and Nurse classes.

> Doctor
- Properties: `_name`, `_remainingVacationDays` (set to 20 inside the constructor()), `_insurance`
- Methods: `.takeVacationDays()`
> Nurse
- Properties: `_name`, `_remainingVacationDays` (set to 20 inside constructor()), `_certifications`
- Methods: `.takeVacationDays()`, `.addCertification()`

In main.js, create a parent class named HospitalEmployee. Add a constructor with name as an argument.

2. Inside of the constructor(), set the instance’s `_name` to name and `_remainingVacationDays` to 20.

3. Under the constructor, create getters for your `_name` and `_remainingVacationDays` properties.

Inside the getter, return the property’s value.

4. Under the getters, add a method called takeVacationDays.

This method should accept one argument, called daysOff.

Inside the method, subtract daysOff from `_remainingVacationDays`. Save the result to `_remainingVacationDays`.

**Answer**
```js
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
```

# Inheritance III
We’ve abstracted the shared properties and methods of our Cat and Dog classes into a parent class called Animal (See below).
```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
} 
```

Now that we have these shared properties and methods in the parent Animal class, we can extend them to the subclass, Cat.
```js
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
```

In the example above, we create a new class named Cat that extends the Animal class. Let’s pay special attention to our new keywords: `extends` and `super`.
- The `extends` keyword makes the methods of the animal class available inside the cat class.
- The constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter.
- The `super` keyword calls the constructor of the parent class. In this case, `super(name)` passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets `this._name = name`; for new Cat instances.
- `_usesLitter` is a new property that is unique to the Cat class, so we set it in the Cat constructor.

Notice, we call super on the first line of our constructor(), then set the usesLitter property on the second line. **In a constructor(), you must always call the `super` method before you can use the `this` keyword — if you do not, JavaScript will throw a reference error. To avoid reference errors, it is best practice to call super on the first line of subclass constructors.**

Below, we create a new Cat instance and call its name with the same syntax as we did with the Dog class:
```js
const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce
```
In the example above, we create a new instance the Cat class, named bryceCat. We pass it 'Bryce' and false for our name and usesLitter arguments. When we call 
```js
console.log(bryceCat._name) // our program prints, Bryce.
```
In the example above, we abandoned best practices by calling our _name property directly. In the next exercise, we’ll address this by calling an inherited getter method for our name property.

Instructions
1. In this exercise, you will begin to create the Nurse class as a child of the HospitalEmployee class. Remember the Nurse class has the following properties and methods:

> Nurse
- Properties: `_name`, `_remainingVacationDays` (set to 20 inside constructor()), `_certifications`
- Methods: `.takeVacationDays()`, `.addCertification()`

Under HospitalEmployee, create an empty class named Nurse that extends HospitalEmployee.

2. Inside the Nurse class, create a constructor() that accepts two arguments. Use the list of properties above to name these arguments.

3. In the Nurse constructor, call the parent’s constructor method and pass the appropriate value(s).

4. Inside of the Nurse constructor, and under super, set _certifications.

5.
Under the Nurse class, create a new instance of Nurse and save it to a constant variable named nurseOlynyk. Pass in the following values for each property:
```js
name: 'Olynyk'
certifications: ['Trauma', 'Pediatrics']
```

**Answer**
```js
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
console.log(nurseOlynyk);
```

**Result**
```js
Nurse {
  _name: 'Olynyk',
  _remainingVacationDays: 20,
  _certifications: [ 'Trauma', 'Pediatrics' ] }
```

# Inheritance IV
Now that we know how to create an object that inherits properties from a parent class let’s turn our attention to methods.

When we call extends in a class declaration, all of the parent methods are available to the child class.

Below, we extend our Animal class to a Cat subclass.
```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
} 
 
 
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
 
const bryceCat = new Cat('Bryce', false);
```

In the example above, our Cat class extends Animal. As a result, the Cat class has access to the Animal getters and the .incrementBehavior() method.

Also in the code above, we create a Cat instance named bryceCat. Because bryceCat has access to the name getter, the code below logs 'Bryce' to the console.
```js
console.log(bryceCat.name);
```

Since the extends keyword brings all of the parent’s getters and methods into the child class, bryceCat.name accesses the name getter and returns the value saved to the name property.

Now consider a more involved example and try to answer the following question: What will the code below log to the console?
```js
bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance 
console.log(bryceCat.behavior); // Log value saved to behavior
```

The correct answer is 1. But why?
- The Cat class inherits the `_behavior` property, behavior getter, and the `.incrementBehavior()` method from the Animal class.
- When we created the bryceCat instance, the Animal constructor set the `_behavior` property to zero.
- The first line of code calls the inherited `.incrementBehavior()` method, which increases the bryceCat `_behavior` value from zero to one.
- The second line of code calls the behavior getter and logs the value saved to `_behavior (1)`.

**Instructions**
1. Call .takeVacationDays() with an input of 5 on your nurseOlynyk instance.
2. Under the method call, log the value saved to the remainingVacationDays property in nurseOlynyk.

**Answer**
```js
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

nurseOlynyk.takeVacationDays(5);

console.log(nurseOlynyk.remainingVacationDays); // 15
```

# Inheritance V
In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods.

Below, we will add a usesLitter getter. The syntax for creating getters, setters, and methods is the same as it is in any other class.
```js
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
}
```

In the example above, we create a usesLitter getter in the Cat class that returns the value saved to `_usesLitter`.

Compare the Cat class above to the one we created without inheritance:

```js
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

We decreased the number of lines required to create the Cat class by about half. Yes, it did require an extra class (Animal), making the reduction in the size of our Cat class seem moot. However, the benefits (time saved, readability, efficiency) of inheritance grow as the number and size of your subclasses increase.

One benefit is that when you need to change a method or property that multiple classes share, you can change the parent class, instead of each subclass.

Before we move past inheritance, take a moment to see how we would create an additional subclass, called Dog.
```js
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
```
This Dog class has access to the same properties, getters, setters, and methods as the Dog class we made without inheritance, and is a quarter the size.

Now that we’ve abstracted animal daycare features, it’s easy to see how you can extend Animal to support other classes, like Rabbit, Bird or even Snake.

**Instructions**
1. Use the properties and methods below to help you complete the tasks that follow.

> Nurse
- Properties: _name, _remainingVacationDays (set to 20 inside the constructor()), _certifications
- Methods: .takeVacationDays(), .addCertification()

Under the Nurse constructor(), add a getter that returns the value saved to the Nurse instance’s _certifications.

2. Add a method called addCertification under the certifications getter.

The method should accept one input (newCertification). Inside the method, use the push method to add the newCertification value to the nurse’s certifications array.

3. At the bottom of main.js call the .addCertification() method on nurseOlynyk with a parameter of 'Genetics'.

4. Log the value saved to the certifications property of nurseOlynyk.

**Answer**
```js
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this._certifications.push(newCertification);
  } 
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays); output: 15

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications); // output : [ 'Trauma', 'Pediatrics', 'Genetics' ]
```

# Static Methods
Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class.

Take the Date class, for example — you can both create Date instances to represent whatever date you want, and call static methods, like Date.now() which returns the current date, directly from the class. The .now() method is static, so you can call it directly from the class, but not from an instance of the class.

Let’s see how to use the static keyword to create a static method called generateName method in our Animal class:
```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 
```
In the example above, we create a static method called .generateName() that returns a random name when it’s called. Because of the static keyword, we can only access .generateName() by appending it to the Animal class.
```js
We call the .generateName() method with the following syntax:

console.log(Animal.generateName()); // returns a name
```
You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses (See below).
```js
const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError
```
The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson).

**Instructions**
1. Inside of your HospitalEmployee class, create a static method called generatePassword. When it’s called, this method should return a random integer between zero and 10,000.

**Answer**
```js
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

console.log(HospitalEmployee.generatePassword());
```

# Review: Classes
Way to go! Let’s review what you learned.
- Classes are templates for objects.
- Javascript calls a constructor method when we create a new instance of a class.
- Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
- We use the `extends` keyword to create a subclass.
- The `super` keyword calls the constructor() of a parent class.
- Static methods are called on the class, but not on instances of the class.

In completing this lesson, you’ve taken one step closer to writing efficient, production-level JavaScript. Good luck as you continue to develop your skills and move into intermediate-level concepts.

**Instructions**

If you want extra practice with inheritance, take some time to create a Doctor class that inherits from HospitalEmployee. The properties and methods for the Doctor class are listed below:

> Doctor
- properties: `_name`, `_remainingVacationDays` (set to 20 inside constructor()), `_insurance`
- methods: `.takeVacationDays()`

**Answer**
```js
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

console.log(HospitalEmployee.generatePassword());

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  }
}
```
