# Lesson : Variables

## 1. Create a Variable: var
There were a lot of changes introduced in the ES6 version of JavaScript in 2015. One of the biggest changes was two new keywords, let and const, to create, or declare, variables. Prior to the ES6, programmers could only use the var keyword to declare variables.
```JavaScript
var myName = 'Arya';
console.log(myName);
// Output : Arya
```
Let’s consider the example above:

1. `var`, short for variable, is a JavaScript keyword that creates, or declares, a new variable.
2. `myName` is the variable’s name. Capitalizing in this way is a standard convention in JavaScript called camel casing. In camel casing you group words into one, the first word is lowercase, then every word that follows will have its first letter uppercased. (e.g. camelCaseEverything).
3. `=` is the assignment operator. It assigns the value (`'Arya'`) to the variable (`myName`).
`'Arya'` is the value assigned (`=`) to the variable myName. You can also say that the `myName` variable is initialized with a value of `'Arya'`.
4. After the variable is declared, the string value `'Arya'` is printed to the console by referencing the variable name: `console.log(myName)`.

There are a few general rules for naming variables:

- Variable names cannot start with numbers.
- Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
- Variable names cannot be the same as keywords. For a comprehensive list of keywords check out MDN’s keyword documentation.

**Note: In the next exercises, we will learn why ES6’s let and const are the preferred variable keywords by many programmers. Because there is still a ton of code written prior to ES6, it’s helpful to be familiar with the pre-ES6 var keyword.**

If you want to learn more about var and the quirks associated with it, check out the MDN var documentation.

**Instructions**
1. Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.
2. Declare a variable named numOfSlices using the var keyword and assign to it the number 8.
3. Under the numOfSlices variable, use console.log() to print the value saved to favoriteFood. On the following line, use console.log() to print the value saved to numOfSlices.

**Answer**
```JavaScript
var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);
```

## 2. Create a Variable: let
As mentioned in the previous exercise, the let keyword was introduced in ES6. The let keyword signals that the variable can be reassigned a different value. Take a look at the example:

```JavaScript
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito
```
Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined:

```JavaScript
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350
```

Notice in the example above:
- If we don’t assign a value to a variable declared using the let keyword, it automatically has a value of undefined.
- We can reassign the value of the variable.

**Instructions**
1. Create a let variable called changeMe and set it equal to the boolean true.
2. On the line after changeMe is declared, set the value of changeMe to be the boolean false. To check if changeMe was reassigned, log the value saved to changeMe to the console.

**Answer**
```JavaScript
let changeMe = true;
console.log(changeMe);
changeMe = false;
console.log(changeMe);
```

## 3. Create a Variable: const
The const keyword was also introduced in ES6, and is short for the word constant. Just like with var and let you can store any value in a const variable. The way you declare a const variable and assign a value to it follows the same structure as let and var. Take a look at the following example:

```JavaScript
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto
```

However, a const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.

Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError.

If you’re trying to decide between which keyword to use, let or const, think about whether you’ll need to reassign the variable later on. If you do need to reassign the variable use let, otherwise, use const.

**Instructions**
1. Create a constant variable named entree and set it to equal to the string 'Enchiladas'.
2. Just to check that you’ve saved the value of 'Enchiladas' to entree, log the value of entree to the console.
3. Great, let’s see what happens if you try to reassign a constant variable.

Paste the following code to the bottom of your program.

```JavaScript
entree = 'Tacos'
```

This code throws the following error when you run your code:

```JavaScript
TypeError: Assignment to constant variable.
```

After you clear this checkpoint, if you want to see about another quirk of const in action open the hint!

**Answer**
```JavaScript
const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos';
```

## 4. Mathematical Assignment Operators





## Review Variables
Nice work! This lesson introduced you to variables, a powerful concept you will use in all your future programming endeavors.

Let’s review what we learned:
- Variables hold reusable data in a program and associate it with a name.
- Variables are stored in memory.
- The var keyword is used in pre-ES6 versions of JS.
- let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
- Variables that have not been initialized store the primitive data type undefined.
- Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
- The + operator is used to concatenate strings including string values held in variables
- In ES6, template literals use backticks ` and `${}` to interpolate values into a string.
- The typeof keyword returns the data type (as a string) of a value.
