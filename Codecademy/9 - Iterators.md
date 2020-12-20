# Introduction to Iterators
Imagine you had a grocery list and you wanted to know what each item on the list was. You’d have to scan through each row and check for the item. This common task is similar to what we have to do when we want to iterate over, or loop through, an array. One tool at our disposal is the for loop. However, we also have access to built-in array methods which make looping easier.

The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

In this lesson, you will learn the syntax for these methods, their return values, how to use the documentation to understand them, and how to choose the right iterator method for a given task.

**Instructions**
Inspect the code in main.js. Notice the different methods being called on the arrays:
```
.forEach()
.map()
.filter()
```
Run the code to see the output!

**Answer**
```js
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
```

**Result**
```
Picasso is one of my favorite artists.
Kahlo is one of my favorite artists.
Matisse is one of my favorite artists.
Utamaro is one of my favorite artists.
[ 1, 4, 9, 16, 25 ]
[ 5, 3.14, 100 ]
```

# The .forEach() Method
The first iteration method that we’re going to learn is .forEach(). Aptly named, .forEach() will execute the same code for each element of an array.
![forEach Method](https://content.codecademy.com/courses/learn-javascript-iterators/iterator%20anatomy.svg)

The code above will log a nicely formatted list of the groceries to the console. Let’s explore the syntax of invoking .forEach().
- groceries.forEach() calls the forEach method on the groceries array.
- .forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
- .forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
- The return value for .forEach() will always be undefined.
- Another way to pass a callback for .forEach() is to use arrow function syntax.

```js
groceries.forEach(groceryItem => console.log(groceryItem));
```
We can also define a function beforehand to be used as the callback function.

```js
function printGrocery(element){
  console.log(element);
}
 
groceries.forEach(printGrocery);
```
The above example uses a function declaration but you can also use a function expression or arrow function as well.

All three code snippets do the same thing. In each array iteration method, we can use any of the three examples to supply a callback function as an argument to the iterator. It’s good to be aware of the different ways to pass in callback functions as arguments in iterators because developers have different stylistic preferences. Nonetheless, due to the strong adoption of ES6, we will be using arrow function syntax in the later exercises.

**Instructions**
1. Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango. You may use any form of callback you prefer.

**Answer**
```js
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`)
})
```

# The .map() Method
The second iterator we’re going to cover is .map(). When .map() is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map():
```js
const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});
```
.map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.

In the example above:
- numbers is an array of numbers.
- bigNumbers will store the return value of calling .map() on numbers.
- numbers.map will iterate through each element in the numbers array and pass the element into the callback function.
- return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.

If we take a look at numbers and bigNumbers:
```js
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
```
Notice that the elements in numbers were not altered and bigNumbers is a new array.

**Instructions**
1. Add your code under the animals array and before the line console.log(secretMessage.join(''));

Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.

2. Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.

**Anwer**
```js
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0]
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number/100;
})

console.log(smallNumbers);
```

**Result**
```
HelloWorld
[ 1, 2, 3, 4, 5 ]
```

# The .filter() Method
Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. Take a look at the following example:
```js
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});
```

- words is an array that contains string elements.
- const shortWords = declares a new variable that will store the returned array from invoking .filter().
- The callback function is an arrow function has a single parameter, word. Each element in the words array will be passed to this function as an argument.
word.length < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.

Let’s also check the values of words and shortWords:
```js
console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
Observe how words was not mutated, i.e. changed, and shortWords is a new array.
```

**Instructions**
1. Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.

2. Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.

**Answer**

```js
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})
```

# The .findIndex() Method
We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
```js
const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
```
- jumbledNums is an array that contains elements that are numbers.
- const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
- The callback function is an arrow function has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.

Let’s take a look at what lessThanTen evaluates to:
```js
console.log(lessThanTen); // Output: 3 
```
If we check what element has index of 3:
```js
console.log(jumbledNums[3]); // Output: 5
```
Great, the element in index 3 is the number 5. This makes sense since 5 is the first element that is less than 10.

If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.
```js
const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
 
console.log(greaterThan1000); // Output: -1
```

Instructions
1. Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.
2. Let’s see if we can find the index of the first animal that starts with the letter 's'.

Call .findIndex() on the animals array return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.

**Hint**
To check the first character of a string you can use the access the 0th index:
```js
const sampleString = 'treasure trove';
sampleString[0]; // 't' 
You can also use .charAt():

sampleString.charAt(0); // 't' 
```

**Answer**
```js
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
})

console.log(startsWithS);
```

**Result**
```
3
```
