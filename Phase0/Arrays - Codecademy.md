# Arrays
Organizing and storing data is a foundational concept of programming.

One way we organize data in real life is by making lists. Let’s make one here:
```
New Year's Resolutions:

1. Keep a journal 
2. Take a falconry class
3. Learn to juggle
```

Let’s now write this list in JavaScript, as an array:
```JavaScript
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
```

Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.

Here’s an array of the concepts we’ll cover:
```JavaScript
let concepts = ['creating arrays', 'array structures', 'array manipulation']
```

By the end of this lesson you’ll have another tool under your belt that helps you manage chunks of data!

Example :
```JavaScript
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions); // output : [ 'Keep a journal', 'Take a falconry class', 'Learn to juggle' ]
```

# Create an Array
One way we can create an array is to use an array literal. An array literal creates an array by wrapping items in square brackets []. Remember from the previous exercise, arrays can store any data type — we can have an array that holds all the same data types or an array that holds different data types.

```JavaScript
['element example', 10, true]
```

Let’s take a closer look at the syntax in the array example:

- The array is represented by the square brackets [] and the content inside.
- Each content item inside an array is called an element.
- There are three different elements inside the array.
- Each element inside the array is a different data type.
- We can also save an array to a variable. You may have noticed we did this in the previous exercise:

```JavaScript
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
```

Let’s practice by making an array of our own.

**Instructions**
1. Declare a variable using const named hobbies and set it equal to an array with three strings inside of it.
2. Use console.log() to print hobbies to the console.

**Answer**
```JavaScript
const hobbies = ['Drawing', 'Reading a book', 'Travelling'];
console.log(hobbies);
```

# Accessing Elements
Each element in an array has a numbered position known as its index. We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. Therefore, the first item in an array will be at position 0. Let’s see how we could access an element in an array:



